import * as types from './actionTypes';


export function success(message) {
    return { type: types.ALERT_SUCCESS, message };
}

export function error(message) {
    return { type: types.ALERT_ERROR.ERROR, message };
}

export function clear() {
    return { type: types.ALERT_CLEAR.CLEAR };
}