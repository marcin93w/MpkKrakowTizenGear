import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

function reduxStore(initialState) {

  initialState = {
    stopsList: {
      isLoading: true
    },
    departures: {
      isLoading: true
    }
  }

  const loggerMiddleware = createLogger()
  const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware, loggerMiddleware));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;
