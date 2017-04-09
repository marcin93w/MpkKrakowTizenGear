import fetch from 'isomorphic-fetch';
import { ApiCallStatus, ApiUrl } from './const';

export const FETCH_SCHEDULE = 'FETCH_SCHEDULE';

export function requestSchedule() {
  return {
    type: FETCH_SCHEDULE,
    status: ApiCallStatus.LOADING
  };
}

export function receiveSchedule(departures) {
  return {
    type: FETCH_SCHEDULE,
    status: ApiCallStatus.SUCCESS,
    departures
  };
}

export function receiveScheduleFetchError(error) {
  return {
    type: FETCH_SCHEDULE,
    status: ApiCallStatus.ERROR,
    error
  };
}

export function fetchSchedule(stopGroupId) {
  return (dispatch) => {
    dispatch(requestSchedule());

    return fetch(`${ApiUrl}departures/${stopGroupId}`)
      .then(response => response.json())
      .then(json => dispatch(receiveSchedule(json)))
      .catch(error => dispatch(receiveScheduleFetchError(error.message || error.toString())));
  };
}
