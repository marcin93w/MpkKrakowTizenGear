/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
export const FETCH_STOPS = 'FETCH_STOPS';

export function fetchStops(lon, lat) {
    return {
        type: FETCH_STOPS,
        location: {
            lon: lon,
            lat: lat
        }
    };
}