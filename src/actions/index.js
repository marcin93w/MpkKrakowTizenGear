/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
export const FETCH_STOPS = 'FETCH_STOPS';

export const ApiCallStatus = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

export function fetchStops(lon, lat) {
    return {
        type: FETCH_STOPS,
        status: ApiCallStatus.LOADING,
        location: {
            lon: lon,
            lat: lat
        }
    };
}

export function receiveStops(stops) {
    return {
        type: FETCH_STOPS,
        status: ApiCallStatus.SUCCESS,
        stops: stops
    };
}

export function receiveStopsFetchError(error) {
    return {
        type: FETCH_STOPS,
        status: ApiCallStatus.ERROR,
        error: error
    };
}