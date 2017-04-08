import { combineReducers } from 'redux';
import { FETCH_STOPS, ApiCallStatus, SELECT_STOP } from '../actions';

function stopsList(state = [], action) {
    if (action.type == FETCH_STOPS) {
        switch (action.status) {
            case ApiCallStatus.LOADING:
                return Object.assign({}, state, { isLoading: true, location: action.location });
            case ApiCallStatus.ERROR:
                return Object.assign({}, state, { isLoading: false, error: action.error });
            case ApiCallStatus.SUCCESS:
                return Object.assign({}, state, { isLoading: false, stops: action.stops });
        }
    }
    if (action.type == SELECT_STOP) {
        return Object.assign({}, state, { selected: action.stopGroupId });
    }

    return state;
}

const reducer = combineReducers({ stopsList });
module.exports = reducer;
