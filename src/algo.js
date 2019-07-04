function Settings(o) {
  this.nowFirst = Object.assign({}, o.now);
  this.now = o.now;
  this.goal = o.goal;

  this.now.bedTime = this.algoHours(this.now.bedTime);

  this.bedTimeDiff =
    (this.now.bedTime - this.goal.bedTime) / this.goal.duration;
  this.surveyTimeDiff =
    (this.now.surveyTime - this.goal.surveyTime) / this.goal.duration;

  this.days = [];
  this.setDays();
}
Settings.prototype.humanHours = function(hours) {
  if (hours >= 24) {
    return hours - 24;
  }
  return hours;
};
Settings.prototype.algoHours = function(hours) {
  if (hours <= 24) {
    return hours + 24;
  }
  return hours;
};
Settings.prototype.setDays = function() {
  for (let i = 0; i < this.goal.duration; i++) {
    const bedTime = this.now.bedTime - this.bedTimeDiff;
    const surveyTime = this.now.surveyTime - this.surveyTimeDiff;
    this.days.push({
      bedTime: Math.round(this.humanHours(bedTime)),
      surveyTime: surveyTime
    });
    this.now.bedTime = bedTime;
    this.now.surveyTime = surveyTime;
  }
};

// console.log(
//   new Settings({
//     now: {
//       bedTime: 2,
//       surveyTime: 13
//     },
//     goal: {
//       bedTime: 22,
//       surveyTime: 8,
//       duration: 4
//     }
//   })
// );

export default Settings;
