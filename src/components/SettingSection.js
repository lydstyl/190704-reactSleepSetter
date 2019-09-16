import React from "react";
function SettingSection(props) {
  return (
    <div>
      <h2>{props.setionTitle || props.sectionName}</h2>
      <p>
        <label>Bed time</label> :{" "}
        <input
          type="time"
          defaultValue={props.bedTime}
          name={props.sectionName.toLowerCase() + "BedTime"}
        />
      </p>
      <p>
        <label>Survey time</label> :{" "}
        <input
          type="time"
          defaultValue={props.surveyTime}
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

export default SettingSection;
