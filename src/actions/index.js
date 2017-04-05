/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.*/

import fetch from 'isomorphic-fetch';

export const FETCH_STOPS = 'FETCH_STOPS';

export const ApiCallStatus = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

export function requestStops(lon, lat) {
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

export function fetchStops(lon, lat) {
    return dispatch => {
        dispatch(requestStops(lon, lat))
        return fetch(`http://46.101.255.97/api/stops?lon=${lon}&lat=${lat}`)
            .then(response => response.json())
            .then(json => dispatch(receiveStops(json)));
    };
}