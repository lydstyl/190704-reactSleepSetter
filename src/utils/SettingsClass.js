function Settings(o) {
  this.nowFirst = Object.assign({}, o.now);
  this.now = o.now;
  this.goal = o.goal;

  this.bedTimeDiff = this.getDiff(
    this.now.bedTime,
    this.goal.bedTime,
    this.goal.duration
  );
  this.surveyTimeDiff = this.getDiff(
    this.now.surveyTime,
    this.goal.surveyTime,
    this.goal.duration
  );

  this.days = [];
  this.setDays();
}

Settings.prototype.humanHours = function(hours) {
  if (hours < 0) {
    return hours + 24;
  }
  if (hours >= 24) {
    return hours - 24;
  }
  return hours;
};

Settings.prototype.setDays = function() {
  for (let i = 0; i < this.goal.duration; i++) {
    const bedTime = this.now.bedTime + this.bedTimeDiff;
    const surveyTime = this.now.surveyTime + this.surveyTimeDiff;
    this.days.push({
      bedTime: this.humanHours(bedTime),
      surveyTime: this.humanHours(surveyTime)
    });
    this.now.bedTime = bedTime;
    this.now.surveyTime = surveyTime;
  }
};

const increase = (now, target) => {
  const o = now;
  const t = target;
  if (o < 12 && t < 12) {
    return o < t;
  } else if (o >= 12 && t >= 12) {
    return o < t;
  } else if (o < 12 && t >= 12) {
    return t - o < 12;
  } else if (t < 12 && o >= 12) {
    return o - t > 12;
  }
};

Settings.prototype.getDiff = (nowTime, goalTime, duration) => {
  let diff;
  const dd = increase(nowTime, goalTime);
  if (dd) {
    diff = goalTime - nowTime;
    if (diff < 0) {
      diff = 24 - nowTime + goalTime; // 24 - 22 + 2
    }
  } else {
    diff = nowTime - goalTime;
    if (diff < 0) {
      diff = 24 - goalTime + nowTime;
    }
    diff = -diff;
  }
  return diff / duration;
};

export default Settings;
