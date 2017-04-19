import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    const {user} = this.props;
    // const styles = require('../notfound/App.scss');

    return (
      <div className={styles.app}>not found</div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
};

export default App;
