import React from 'react';
import './app.css';
import StopsList from '../containers/StopsList.js'

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <StopsList />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
