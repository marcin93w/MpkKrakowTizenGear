import { requestStops, receiveStops, receiveStopsFetchError, fetchStops } from 'actions'
import reducers from 'reducers'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

describe('Stops list', function () {

  beforeEach(function () {
    this.store = createStore(reducers, applyMiddleware(thunkMiddleware))
    this.unsubscribe = this.store.subscribe(() =>
        this.stateAfterAction = this.store.getState()
    )
  });

  afterEach(function() {
    this.unsubscribe();
  });

  it('should update location in store before fetch', function () {

    this.store.dispatch(requestStops(50, 20));

    let location = this.stateAfterAction.stopsList.location;
    expect(location.lon).to.equal(50);
    expect(location.lat).to.equal(20);
  });

  it('should update is loading flag before fetch', function () {
    this.store.dispatch(requestStops(50, 20));
    expect(this.stateAfterAction.stopsList.isLoading).to.equal(true);
  });

  it('should update is loading flag after fetch', function () {
    this.store.dispatch(requestStops(50, 20));
    this.store.dispatch(receiveStops([]));
    expect(this.stateAfterAction.stopsList.isLoading).to.equal(false);
  });

  it('should update is loading flag after fetch error', function () {
    this.store.dispatch(requestStops(50, 20));
    this.store.dispatch(receiveStopsFetchError("error"));
    expect(this.stateAfterAction.stopsList.isLoading).to.equal(false);
  });

  it('should update error message after fetch error', function () {
    this.store.dispatch(requestStops(50, 20));
    this.store.dispatch(receiveStopsFetchError("error"));
    expect(this.stateAfterAction.stopsList.error).to.equal("error");
  });

  it('should update stops list after fetch', function () {
    this.store.dispatch(requestStops(50, 20));
    this.store.dispatch(receiveStops(["stop1", "stop2"]));
    expect(this.stateAfterAction.stopsList.stops).to.deep.equal(["stop1", "stop2"]);
  });
});
