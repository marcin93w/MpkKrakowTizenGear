import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores';

try{
  const store = configureStore();

  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );

  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      const NextApp = require('./containers/App').default; // eslint-disable-line global-require

      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <NextApp />
          </Provider>
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }
} catch(error) {
  document.getElementById('app').innerHTML = '<br /><br /><br /><br /><br />' + error;
}
