"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from "react";
import { account, ID, database } from "@/libs/AppWriteClient";
import { User, UserContextTypes } from "@/app/types";
import { useRouter } from "next/navigation";
import useGetProfileByUserId from "@/hooks/useGetProfileByUserId";
import useCreateProfile from "@/hooks/useCreateProfile";
import moment from "moment-timezone";
import bcrypt from "bcryptjs";

const UserContext = createContext<UserContextTypes | null>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const ref = useRef(null);

  let currentTime = moment().format("HH:mm:ss");
  // console.log(userTimeZone);
  const checkMatchStatus = (storedTime: string) => {
    // Get the user's timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Convert stored time to a moment object in the user's timezone
    const matchTime = moment(storedTime).tz(userTimeZone);

    // Get the current time in the user's timezone
    const currentTime = moment().tz(userTimeZone);

    // Calculate the difference in minutes between the current time and the match time
    const timeDiffMinutes = matchTime.diff(currentTime, "minutes");

    // console.log(timeDiffMinutes);
    // Define the initial status as "NS" (Not Started)
    let status = "NS"; // Default status

    // Check the time difference to determine the match status
    if (timeDiffMinutes < -105) {
      status = "FT"; // Match has not started yet
    } else if (timeDiffMinutes <= -1 && timeDiffMinutes > -45) {
      status = "1/2"; // First half of the match
    } else if (timeDiffMinutes < -45 && timeDiffMinutes >= -60) {
      status = "HT"; // Halftime
    } else if (timeDiffMinutes < -60 && timeDiffMinutes > -105) {
      status = "2/2"; // Second half of the match
    } else if (timeDiffMinutes > 1) {
      status = "NS"; // Full time
    }

    // Return the determined match status
    return status;
  };

  const checkUser = async () => {
    // console.log(account.getSession("current"));
    try {
      const currentSession = await account.getSession("current");

      console.log(currentSession);
      if (!currentSession) return;

      const promise = (await account.get()) as any;
      console.log("user is logged in");
      const profile = await useGetProfileByUserId(promise?.$id);
      setUser({
        id: promise?.$id,
        name: promise?.name,
        bio: profile?.bio,
        image: profile?.image,
        balance: profile?.balance,
        rank: profile?.rank,
        status: profile?.status,
      });
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const hashPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const promise = await account.create(ID.unique(), email, password, name);
      // await account.createEmailPasswordSession(email, password);
      await login(email, password);

      await useCreateProfile(
        promise?.$id,
        name,
        String(process.env.NEXT_PUBLIC_PLACEHOLDER_DEFAULT_IMAGE_ID),
        "",
        0,
        "user",
        email,
        password
      );
      await checkUser();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      checkUser();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  const gideon = {
    currency: "USD",
    balance: 1000,
  };

  return (
    <UserContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        checkUser,
        currentTime,
        checkMatchStatus,
        gideon,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext);
