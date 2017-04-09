import { combineReducers } from 'redux';
import { FETCH_STOPS, CHANGE_STOP } from '../actions/StopsList';
import { FETCH_SCHEDULE } from '../actions/StopSchedule';
import { ApiCallStatus } from '../actions/const';

function stopsList(state = [], action) {
    if (action.type == FETCH_STOPS) {
        switch (action.status) {
            case ApiCallStatus.LOADING:
                return Object.assign({}, state, { isLoading: true });
            case ApiCallStatus.ERROR:
                return Object.assign({}, state, { isLoading: false, error: action.error });
            case ApiCallStatus.SUCCESS:
                return Object.assign({}, state, { isLoading: false, stops: action.stops });
        }
    }
    if (action.type == CHANGE_STOP) {
        let selected = state.selected || 0;
        if(action.direction > 0) {
            if(selected < state.stops.length -1) {
                selected++;
            }
        } else {
            if(selected > 0) {
                selected--;
            }
        }
        return Object.assign({}, state, { selected: selected });
    }

    return state;
}

function departures(state = [], action) {
    if (action.type == FETCH_SCHEDULE) {
        switch (action.status) {
            case ApiCallStatus.LOADING:
                return Object.assign({}, state, { isLoading: true });
            case ApiCallStatus.ERROR:
                return Object.assign({}, state, { isLoading: false, error: action.error });
            case ApiCallStatus.SUCCESS:
                return Object.assign({}, state, { isLoading: false, departures: action.departures });
        }
    }

    return state;
}

const reducer = combineReducers({ stopsList, departures });
module.exports = reducer;
