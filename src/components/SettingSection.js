import React, { useState } from 'react';
import Duration from './Duration';

function SettingSection(props) {
  const [bed, setBed] = useState(
    localStorage.getItem('goalBedTime')
      ? localStorage.getItem('goalBedTime')
      : props.bedTime
  );

  const [survey, setSurvey] = useState(
    localStorage.getItem('goalSurveyTime')
      ? localStorage.getItem('goalSurveyTime')
      : props.surveyTime
  );

  const onTimeChange = e => {
    if (e.target.name === 'goalBedTime') {
      localStorage.setItem('goalBedTime', e.target.value);
    }
    if (e.target.name === 'goalSurveyTime') {
      localStorage.setItem('goalSurveyTime', e.target.value);
    }
  };

  return (
    <div>
      <h2>{props.setionTitle || props.sectionName}</h2>
      <p>
        <label>Bed time</label> :{' '}
        <input
          type='time'
          defaultValue={bed}
          name={props.sectionName.toLowerCase() + 'BedTime'}
          onChange={onTimeChange}
        />
      </p>
      <p>
        <label>Survey time</label> :{' '}
        <input
          type='time'
          defaultValue={survey}
          name={props.sectionName.toLowerCase() + 'SurveyTime'}
          onChange={onTimeChange}
        />
      </p>
      {props.duration && <Duration />}
    </div>
  );
}

export default SettingSection;
