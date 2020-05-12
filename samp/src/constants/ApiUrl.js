const BASE_URL = 'http://103.79.223.60:8080/lockbox/';

/******************************Login**********************************/
const LOGIN_TOKEN = `${BASE_URL}oauth/token`;
const USER_DETAILS = `${BASE_URL}core/v1/employee/detail`;
/******************************Screens********************************/
const FILTER_DEVICE = `${BASE_URL}core/v1/device/filter`;
const GENERATE_KEY = `${BASE_URL}core/v1/device/key/generator`;


export {
    BASE_URL,
    LOGIN_TOKEN,
    USER_DETAILS,
    FILTER_DEVICE,
    GENERATE_KEY
};