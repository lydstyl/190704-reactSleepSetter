import React from 'react';

import getInstructionsList from './utils/getInstructionsList';

import SettingSection from './components/SettingSection';
import Instructions from './components/Instructions';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: localStorage.getItem('instructionsList')
        ? JSON.parse(localStorage.getItem('instructionsList'))
        : [] // eg [{ bedTime: 22, surveyTime: 8 }]
    };
  }

  handleInsctructions(e) {
    const instructionsList = getInstructionsList();

    localStorage.setItem('instructionsList', JSON.stringify(instructionsList));

    this.setState({
      list: instructionsList
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='settings'>
          <SettingSection
            sectionName='Now'
            setionTitle='Last time I slept'
            bedTime='02:00'
            surveyTime='11:00'
          />
          <SettingSection
            sectionName='Goal'
            setionTitle='My goal'
            duration='true'
            bedTime='22:30'
            surveyTime='07:00'
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
