import React from "react";
import "./App.css";
import SettingSection from "./SettingSection";
import Instructions from "./Instructions";
import Settings from "./algo";

function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
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
