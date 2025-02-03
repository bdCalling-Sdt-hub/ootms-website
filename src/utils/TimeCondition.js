import dayjs from "dayjs";

const disabledDate = (current) => {
  // Can not select days before today
  return current && current < dayjs().startOf("day");
};

const getDisabledHours = (currentDate) => {
  const hours = dayjs().hour();
  if (dayjs(currentDate).isSame(dayjs(), "day")) {
    return Array.from({ length: hours }, (_, i) => i);
  }
  return [];
};

const getDisabledMinutes = (currentDate, selectedHour) => {
  const minutes = dayjs().minute();
  if (dayjs(currentDate).isSame(dayjs(), "day") && selectedHour === hours) {
    return Array.from({ length: minutes + 1 }, (_, i) => i);
  }
  return [];
};

const getDisabledSeconds = (currentDate, selectedHour, selectedMinute) => {
  const seconds = dayjs().second();
  if (
    dayjs(currentDate).isSame(dayjs(), "day") &&
    selectedHour === hours &&
    selectedMinute === minutes
  ) {
    return Array.from({ length: seconds + 1 }, (_, i) => i);
  }
  return [];
};

const disabledTime = () => {
  if (pickupDate && dayjs(pickupDate).isSame(dayjs(), "day")) {
    const hours = dayjs().hour();
    const minutes = dayjs().minute();
    return {
      disabledHours: () => getDisabledHours(pickupDate),
      disabledMinutes: () => getDisabledMinutes(pickupDate, hours),
      disabledSeconds: () => getDisabledSeconds(pickupDate, hours, minutes),
    };
  }
  return {};
};

export {
  disabledDate,
  getDisabledHours,
  getDisabledMinutes,
  getDisabledSeconds,
  disabledTime,
};
