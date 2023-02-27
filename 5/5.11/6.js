function getSecondsToday() {
  let currentTime = new Date();
  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();
  return seconds + minutes * 60 + hours * 3600;
}
console.log(getSecondsToday());
