import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    const styles = require('./home.scss');
    return (
      <div className={styles.home}>home</div>
    );
  }
};
