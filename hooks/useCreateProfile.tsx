import { database, ID } from "@/libs/AppWriteClient";

const useCreateProfile = async (
  userId: string,
  name: string,
  image: string,
  bio: string,
  balance: number,
  rank: string,
  email: string,
  password: string
) => {
  try {
    await database.createDocument(
      String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
      String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE),
      ID.unique(),
      {
        userId: userId,
        name: name,
        email: email,
        password: password,
        image: image,
        bio: bio,
        balance: balance,
        rank: rank,
        status: true,
        records: [""],
      }
    );
  } catch (error) {
    throw error;
  }
};

export default useCreateProfile;
