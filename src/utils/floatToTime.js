const floatToTime = timefloat => {
  timefloat = timefloat.toString(); // eg '8.5'
  if (!timefloat.includes('.')) {
    return timefloat + ':00';
  } else {
    timefloat = timefloat.split('.');
    let hour = timefloat[0];
    if (hour < 10) {
      hour = '0' + hour.toString();
    }
    let min = timefloat[1];
    min = Math.round(parseFloat('0.' + min) * 60);
    if (min === 60) {
      hour = parseInt(hour, 10) + 1;
      min = 0;
    }
    if (min < 10) {
      min = '0' + min.toString();
    }
    return `${hour}:${min}`; // eg '8:30'
  }
};

export default floatToTime;
