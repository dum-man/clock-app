export const getCurrentTime = (currentDate: Date) => {
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  let minute;
  if (currentMinute < 10) {
    minute = `0${currentMinute}`;
  } else {
    minute = currentMinute;
  }

  let hour;
  if (currentHour < 10) {
    hour = `0${currentHour}`;
  } else {
    hour = currentHour;
  }

  return `${hour}:${minute}`;
};

export const getTimeOfDay = (currentDate: Date) => {
  const currentHour = currentDate.getHours();

  if (currentHour >= 5 && currentHour <= 11) {
    return "morning";
  } else if (currentHour >= 12 && currentHour <= 17) {
    return "afternoon";
  } else if (currentHour >= 18 && currentHour <= 22) {
    return "evening";
  }
  return "night";
};
