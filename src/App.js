import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { isDeclareVariable } from "@babel/types";

import Settings from "./algo";

function SettingSection(props) {
  return (
    <div>
      <h2>{props.sectionName}</h2>
      <p>
        <label>Bed time</label> :{" "}
        <input type="text" name={props.sectionName.toLowerCase() + "BedTime"} />
      </p>
      <p>
        <label>Survey time</label> :{" "}
        <input
          type="text"
          name={props.sectionName.toLowerCase() + "SurveyTime"}
        />
      </p>
      {props.duration && (
        <p>
          <label>Duration in days</label> :{" "}
          <input type="text" name="duration" />
        </p>
      )}
    </div>
  );
}

const Todos = props => {
  let list = props.list.map((day, index) => {
    return (
      <li key={index} id={index}>
        Day {index + 1}, bed time at {day.bedTime} and survey time at{" "}
        {day.surveyTime}.
      </li>
    );
  });

  return <ul>{list}</ul>;
};

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
        bedTime: parseFloat(document.querySelector("[name=nowBedTime]").value),
        surveyTime: parseFloat(
          document.querySelector("[name=nowSurveyTime]").value
        )
      },
      goal: {
        bedTime: parseFloat(document.querySelector("[name=goalBedTime]").value),
        surveyTime: parseFloat(
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
        <header className="App-header">
          <h1>SLEEP SETTER</h1>
          <p>When to sleep to become human again when you are a vampire ...</p>
          <div className="settings">
            <SettingSection sectionName="Now" />
            <SettingSection sectionName="Goal" duration="true" />
          </div>
          <button
            onClick={e => {
              this.handleInsctructions(e);
            }}
          >
            Get instructions
          </button>

          <Todos list={this.state.list} />

          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
