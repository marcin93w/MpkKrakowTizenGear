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
      lon,
      lat
    }
  };
}

export function receiveStops(stops) {
  return {
    type: FETCH_STOPS,
    status: ApiCallStatus.SUCCESS,
    stops
  };
}

export function receiveStopsFetchError(error) {
  return {
    type: FETCH_STOPS,
    status: ApiCallStatus.ERROR,
    error
  };
}

export function fetchStops(lon, lat) {
  return (dispatch) => {
    dispatch(requestStops(lon, lat));
    return fetch(`http://46.101.255.97/api/stops?lon=${lon}&lat=${lat}`)
            .then(response => response.json())
            .then(json => dispatch(receiveStops(json)))
            .catch(error => dispatch(receiveStopsFetchError(error.toString())));
  };
}

export const SELECT_STOP = "SELECT_STOP";

export function selectStop(stopGroupId) {
  return {
    type: SELECT_STOP,
    stopGroupId: stopGroupId
  }
}