import React from 'react';
import Radium from 'radium';
import { Paper, Typography } from '@material-ui/core';
import ReferringTemplate from './letter/ReferringTemplate';
import ConsentTemplate from './letter/ConsentTemplate';
import PatientForm from './PatientForm/PatientForm';
import AssestmentForm from './AssestmentForm/AssestmentForm';
import Cover from './Cover/Cover';
import BackgroundForm from './BackgroundForm/BackgroundForm';
import BackgroundTemplate from './letter/BackgroundTemplate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: {},
      assestment: {},
      problems: {
        apetiteReduced: false,
        shortTermMemory: false,
        riskAggression: false,
        riskFire: false,
        forgettingMedication: false
      },
      presence: {
        relatives: {
          husband: false,
          wife: false,
          partner: false,
          daughter: false,
          son: false,
          friend: false
        },
        workers: {
          worker1: '',
          worker2: ''
        }
      },
      background: {
        studies: '',
        haveQuitStudies: false,
        birthPlace: '',
        lastJob: ''
      }
    };
  }

  handlePatientGenderChange = e => {
    this.setState({
      patient: {
        ...this.state.patient,
        gender: e.target.value,
        pronoun: e.target.value === 'F' ? 'she' : 'he',
        possesivePronoun: e.target.value === 'F' ? 'her' : 'his',
      }
    });
  }

  handlePatientNameChange = e => {
    this.setState({
      patient: {
        ...this.state.patient,
        name: e.target.value
      }
    });
  }



  handleAssestmentDateChange = e => {
    this.setState({
      assestment: {
        ...this.state.assestment,
        date: new Date(e.target.value).toLocaleDateString()
      }
    });
  }

  handleAssestmentPlaceChange = e => {
    this.setState({
      assestment:{
        ...this.state.assestment,
        place: e.target.value
      }
    });
  }

  handleProblemsChange = e => {
    this.setState({
      problems: {
        ...this.state.problems,
          [e.target.value]: e.target.checked
        }
    });
  };

  handlePresenceChange = e => {
    this.setState({
      presence: {
        ...this.state.presence,
        relatives: {
          ...this.state.presence.relatives,
          [e.target.value]: e.target.checked
        }
      },
    });
  };

  handleWorkerPresenceChange = e => {
    this.setState({
      presence: {
        ...this.state.presence,
        workers: {
          ...this.state.presence.workers,
          [e.target.name]: e.target.value
        }
      },
    });    
  }

  handleBirthPlaceChange = e => {
    this.setState({
      background: {
        ...this.state.background,
        birthPlace: e.target.value
      },
    });       
  }

  handleStudiesChange = e => {
    this.setState({
      background: {
        ...this.state.background,
        studies: e.target.value
      },
    });       
  }

  handleHaveQuitStudiesChange = e => {
    this.setState({
      background: {
        ...this.state.background,
        haveQuitStudies: e.target.checked
      },
    });       
  }

  handleComingYearChange = e => {
    this.setState({
      background: {
        ...this.state.background,
        comingYear: e.target.value
      },
    });       
  }

  handleLastJobChange = e => {
    this.setState({
      background: {
        ...this.state.background,
        lastJob: e.target.value
      },
    });       
  }

  

  render() {
    return (
      <div className="app">

        <div className="left-col">
          <Typography component="h1" variant="h4" gutterBottom>
            Mental Health assestment
          </Typography>

          <div className="form">
            <PatientForm
              onPatientGenderChange={this.handlePatientGenderChange}
              onPatientNameChange={this.handlePatientNameChange}
              patient={this.state.patient}
            >
            </PatientForm>
          </div>

          <div className="form">
            <AssestmentForm
              onAssestmendDateChange={this.handleAssestmentDateChange}
              onAssestmentPlaceChange={this.handleAssestmentPlaceChange}
              onPresenceChange={this.handlePresenceChange}
              onWorkerPresenceChange={this.handleWorkerPresenceChange}
              assestment={this.state.assestment}
              presence={this.state.presence}
            >
            </AssestmentForm>
          </div>

          <div className="form">
            <BackgroundForm
              onBirthPlaceChange={this.handleBirthPlaceChange}
              onComingYearChange={this.handleComingYearChange}
              onHaveQuitStudiesChange={this.handleHaveQuitStudiesChange}
              onStudiesChange={this.handleStudiesChange}
              onLastJobChange={this.handleLastJobChange}
              background={this.state.background}
            >
            </BackgroundForm>
          </div>

          {/* <ProblemsForm
            onProblemsChange={this.handleProblemsChange}
            problems={this.state.problems}
          >
          </ProblemsForm> */}

        </div>

        <div className="right-col">
          <Paper className="paper" elevation={2}>

            <Cover validation={[
              this.state.patient.gender,
              this.state.patient.name
            ]}>
              <ReferringTemplate
                patient={this.state.patient}>
              </ReferringTemplate>
            </Cover>

            <Cover validation={[
              this.state.patient.name, 
              this.state.patient.gender, 
              this.state.assestment.date, 
              this.state.assestment.place
            ]}>
              
              <ConsentTemplate
                patient={this.state.patient}
                assestment={this.state.assestment}
                presence={this.state.presence}>
              </ConsentTemplate>

              {/* <ProblemsTemplate>
              </ProblemsTemplate> */}
            </Cover>

            <Cover validation={[
              this.state.background.birthPlace, 
              this.state.patient.pronoun
            ]}>
              <BackgroundTemplate
                background={this.state.background}
                patient={this.state.patient}
              >
              </BackgroundTemplate>

            </Cover>
          </Paper>
        </div>
      </div>
    )
  }
}

export default Radium(App);