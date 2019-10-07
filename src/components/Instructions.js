import React from 'react';
import floatToTime from '../utils/floatToTime';

const Instructions = props => {
  let formValid = true;

  props.list.forEach(day => {
    if (isNaN(day.bedTime) || isNaN(day.surveyTime)) {
      formValid = false;
    }
  });

  if (!formValid) {
    return (
      <ul>
        <li>
          <p>Please fill out the whole form and try again</p>
        </li>
      </ul>
    );
  } else {
    let list = props.list.map((day, index) => {
      return (
        <li key={index} id={index}>
          Day {index + 1}: bed time at {floatToTime(day.bedTime)} and survey
          time at {floatToTime(day.surveyTime)}.
        </li>
      );
    });

    return <ul>{list}</ul>;
  }
};

export default Instructions;
