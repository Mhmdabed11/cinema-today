export const toLocaleDuration = time => {
  if (!time || time < 0) {
    return;
  }
  const hrs = Math.floor(time / 60);
  const mns = time % 60;
  const mnsLabel = mns > 1 ? "mns" : "mn";
  const duration = `${hrs}hrs ${mns}${mnsLabel}`;
  return duration;
};
