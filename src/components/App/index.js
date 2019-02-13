import React from 'react';
import { Grid } from '@material-ui/core';

import AppTitle from '../AppTitle';
import Form from '../Form';
import Letter from '../Letter';

import styles from './App.module.css';

class App extends React.Component {
  state = {
    name: '',
    gender: 'female',
    date: '',
    place: 'home',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  render() {
    return (
      <div className={styles.app}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <AppTitle title='My App title' />
            <Form
              {...this.state}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Letter
              {...this.state}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
