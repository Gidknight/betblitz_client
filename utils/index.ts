import moment from "moment-timezone";

export const setMatchTime = (storedTime: string) => {
  if (!setMatchTime) {
    return;
  }
  let matchTime = moment(storedTime).format("HH:mm");
  return matchTime;
};

export const checkMatchStatus = (storedTime: string) => {
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
  } else if (timeDiffMinutes > 0) {
    status = "NS"; // Full time
  }

  // Return the determined match status
  return status;
};
