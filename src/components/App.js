import React from 'react';
import './app.scss';
import StopsList from '../containers/StopsList.js'
import StopSchedule from '../containers/StopSchedule.js'
import {HashRouter, Route, Switch} from 'react-router-dom';

class AppComponent extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="index">
          <Switch>
            <Route path="/schedule/:stopGroupId" component={StopSchedule} />
            <Route path="/" component={StopsList} />
        </Switch>
        </div>
      </HashRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
