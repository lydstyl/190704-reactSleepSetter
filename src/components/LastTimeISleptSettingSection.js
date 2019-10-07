import React, { useState } from 'react';

const LastTimeISleptSettingSection = props => {
  const [bed, setBed] = useState(
    localStorage.getItem('lastBedTime')
      ? localStorage.getItem('lastBedTime')
      : props.bedTime
  );

  const [survey, setSurvey] = useState(
    localStorage.getItem('lastSurveyTime')
      ? localStorage.getItem('lastSurveyTime')
      : props.surveyTime
  );

  const onTimeChange = e => {
    if (e.target.name === 'lastBedTime') {
      localStorage.setItem('lastBedTime', e.target.value);
    }
    if (e.target.name === 'lastSurveyTime') {
      localStorage.setItem('lastSurveyTime', e.target.value);
    }
  };

  return (
    <div>
      <h2>Last time I slept</h2>
      <p>
        <label>Bed time</label> :{' '}
        <input
          type='time'
          defaultValue={bed}
          name='lastBedTime'
          onChange={onTimeChange}
        />
      </p>
      <p>
        <label>Survey time</label> :{' '}
        <input
          type='time'
          defaultValue={survey}
          name='lastSurveyTime'
          onChange={onTimeChange}
        />
      </p>
    </div>
  );
};

export default LastTimeISleptSettingSection;
