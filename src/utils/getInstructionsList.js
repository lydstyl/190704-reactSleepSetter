import Settings from './SettingsClass';

import timeStringToFloat from './timeStringToFloat';

const getInstructionsList = () => {
  return new Settings({
    now: {
      bedTime: timeStringToFloat(
        document.querySelector('[name=lastBedTime]').value
      ),
      surveyTime: timeStringToFloat(
        document.querySelector('[name=lastSurveyTime]').value
      )
    },
    goal: {
      bedTime: timeStringToFloat(
        document.querySelector('[name=goalBedTime]').value
      ),
      surveyTime: timeStringToFloat(
        document.querySelector('[name=goalSurveyTime]').value
      ),
      duration: parseFloat(document.querySelector('[name=duration]').value)
    }
  }).days;
};

export default getInstructionsList;
