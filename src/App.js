import React from 'react';
import Radium from 'radium';
import ReferringTemplate from './letter/ReferringTemplate';
import ConsentTemplate from './letter/ConsentTemplate';
import PatientForm from './forms/PatientForm';
import AssestmentForm from './forms/AssestmentForm';
import { Paper, Typography } from '@material-ui/core';

const styles = {
  app: {
    display: 'flex',
    fontWeight: 300,
    padding: '50px'
  },
  leftCol: {
    flex: '50%'
  },
  rightCol: {
    flex: '50%',
  },
  paper: {
    padding: '40px 30px',
    fontFamily: 'Cormorant Garamond, serif',
  },
  form: {
    margin: '20px 0px 50px 0'
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: {},
      assestment: {},
      presence: {}
    };
  }

  handlePatientGenderChange = (e) => {
    this.setState({
      ...this.state,
      patient: {
        ...this.state.patient,
        gender: e.target.value,
        pronoun: e.target.value === 'F' ? 'she' : 'he',
        possesivePronoun: e.target.value === 'F' ? 'her' : 'his',
      }
    });
  }

  handlePatientNameChange = (e) => {
    this.setState({
      ...this.state,
      patient: {
        ...this.state.patient,
        name: e.target.value
      }
    });
  }

  handleAssestmentDateChange = (e) => {
    this.setState({
      ...this.state,
      assestment: {
        ...this.state.assestment,
        date: e.target.value
      }
    });
  }

  handleAssestmentPlaceChange = (e) => {
    this.setState({
      ...this.state,
      assestment:{
        ...this.state.assestment,
        place: e.target.value
      }
    });
  }

  handlePresenceChange = (e) => {
    let newState = {...this.state};
    newState.presence[e.target.value] = !newState.presence[e.target.value];
    this.setState(newState);
  }

  render() {
    return (
      <div style={styles.app}>

        <div style={styles.leftCol}>
          <Typography component="h1" variant="h4" gutterBottom>
            Mental Health assestment
          </Typography>

          <div style={styles.form}>
            <PatientForm 
            onPatientGenderChange={this.handlePatientGenderChange}
            onPatientNameChange={this.handlePatientNameChange}
            patient={this.state.patient}>
            </PatientForm>
          </div>

          <div style={styles.form}>
            <AssestmentForm
            onAssestmendDateChange={this.handleAssestmentDateChange}
            onAssestmentPlaceChange={this.handleAssestmentPlaceChange}
            onPresenceChange={this.handlePresenceChange}
            assestment={this.state.assestment}
            presence={this.state.presence}>
            </AssestmentForm>
          </div>
        </div>


        <div style={styles.rightCol}>
          <Paper style={styles.paper} elevation={4}>

            <ReferringTemplate 
              patient={this.state.patient}>
            </ReferringTemplate>

            <ConsentTemplate 
              patient={this.state.patient} 
              assestment={this.state.assestment}>
            </ConsentTemplate>

          </Paper>        
        </div>
      </div>
    )
  }
}

export default Radium(App);