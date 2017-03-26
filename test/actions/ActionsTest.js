import { fetchStops } from 'actions'
import { createStore } from 'redux'
import reducers from 'reducers'

describe('Redux', function () {

  it('should work', function () {

    let store = createStore(reducers)

    var stateAfterAction = [];

    let unsubscribe = store.subscribe(() =>
        stateAfterAction = store.getState()
    )

    store.dispatch(fetchStops(50, 20))
    unsubscribe()

    expect(stateAfterAction.stops.lon).to.equal(50);
    expect(stateAfterAction.stops.lat).to.equal(20);

  });
});
