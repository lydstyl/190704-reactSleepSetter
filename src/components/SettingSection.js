import React, { useState } from 'react';
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
      {props.duration && (
        <p>
          <label>In (days) :</label>
          <input
            type='range'
            min='1'
            max='7'
            step='1'
            list='duration'
            name='duration'
            defaultValue='3'
          />
          <datalist id='duration'>
            <option value='1' label='1' />
            <option value='2' label='2' />
            <option value='3' label='3' />
            <option value='4' label='4' />
            <option value='5' label='5' />
            <option value='6' label='6' />
            <option value='7' label='7' />
          </datalist>
        </p>
      )}
    </div>
  );
}

export default SettingSection;
