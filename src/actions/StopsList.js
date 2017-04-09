import fetch from 'isomorphic-fetch';
import { ApiCallStatus, ApiUrl } from './const';

export const FETCH_STOPS = 'FETCH_STOPS';

export function requestStops() {
  return {
    type: FETCH_STOPS,
    status: ApiCallStatus.LOADING
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

export function fetchStops() {
  return (dispatch) => {
    dispatch(requestStops());

    return getCurrentLocation()
      .then(coords => fetch(`${ApiUrl}stops?lon=${coords.longitude}&lat=${coords.latitude}`))
      .then(response => response.json())
      .then(json => dispatch(receiveStops(json)))
      .catch(error => dispatch(receiveStopsFetchError(error.message || error.toString())));
  };
}

function getCurrentLocation() {
  let promise = new Promise((resolve, reject) => {
    //var options = {enableHighAccuracy: true, maximumAge: 600000, timeout: 600000};
    navigator.geolocation.getCurrentPosition(pos => resolve(pos.coords), reject);
  });

  return promise;
}

export const CHANGE_STOP = "CHANGE_STOP";

export function selectPrevStop() {
  return {
    type: CHANGE_STOP,
    direction: -1
  }
}

export function selectNextStop() {
  return {
    type: CHANGE_STOP,
    direction: 1
  }
}