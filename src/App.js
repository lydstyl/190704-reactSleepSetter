import React from "react";
import "./App.css";

import Settings from "./algo";

function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}

function SettingSection(props) {
  return (
    <div>
      <h2>{props.setionTitle || props.sectionName}</h2>
      <p>
        <label>Bed time</label> :{" "}
        <input type="time" name={props.sectionName.toLowerCase() + "BedTime"} />
      </p>
      <p>
        <label>Survey time</label> :{" "}
        <input
          type="time"
          name={props.sectionName.toLowerCase() + "SurveyTime"}
        />
      </p>
      {props.duration && (
        <p>
          <label>In (days) :</label>
          <input
            type="range"
            min="1"
            max="7"
            step="1"
            list="duration"
            name="duration"
            defaultValue="3"
          />
          <datalist id="duration">
            <option value="1" label="1" />
            <option value="2" label="2" />
            <option value="3" label="3" />
            <option value="4" label="4" />
            <option value="5" label="5" />
            <option value="6" label="6" />
            <option value="7" label="7" />
          </datalist>
        </p>
      )}
    </div>
  );
}

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
  }
  let list = props.list.map((day, index) => {
    return (
      <li key={index} id={index}>
        Day {index + 1}: bed time at {floatToTime(day.bedTime)} and survey time
        at {floatToTime(day.surveyTime)}.
      </li>
    );
  });
  return <ul>{list}</ul>;
};

function floatToTime(timefloat) {
  timefloat = timefloat.toString(); // '8.5'
  if (!timefloat.includes(".")) {
    return timefloat + ":00";
  } else {
    timefloat = timefloat.split(".");
    let hour = timefloat[0];
    if (hour < 10) {
      hour = "0" + hour.toString();
    }
    let min = timefloat[1];
    min = Math.round(parseFloat("0." + min) * 60);
    if (min === 60) {
      hour = parseInt(hour, 10) + 1;
      min = 0;
    }
    if (min < 10) {
      min = "0" + min.toString();
    }
    return `${hour}:${min}`; // '8:30'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [] // eg [{ bedTime: 22, surveyTime: 8 }]
    };
  }

  handleInsctructions(e) {
    const days = new Settings({
      now: {
        bedTime: timeStringToFloat(
          document.querySelector("[name=nowBedTime]").value
        ),
        surveyTime: timeStringToFloat(
          document.querySelector("[name=nowSurveyTime]").value
        )
      },
      goal: {
        bedTime: timeStringToFloat(
          document.querySelector("[name=goalBedTime]").value
        ),
        surveyTime: timeStringToFloat(
          document.querySelector("[name=goalSurveyTime]").value
        ),
        duration: parseFloat(document.querySelector("[name=duration]").value)
      }
    }).days;

    this.setState({
      list: days
    });
  }

  render() {
    return (
      <div className="App">
        <h1>SLEEP SETTER</h1>
        <p>
          When to sleep to become human again when you are turning into a
          vampire ...
        </p>
        <div className="settings">
          <SettingSection sectionName="Now" setionTitle="Last time I slept" />
          <SettingSection
            sectionName="Goal"
            setionTitle="My goal"
            duration="true"
          />
        </div>
        <button
          onClick={e => {
            this.handleInsctructions(e);
          }}
        >
          Get instructions
        </button>

        <Instructions list={this.state.list} />
      </div>
    );
  }
}

export default App;
