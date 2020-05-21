const BASE_URL = 'http://103.79.223.60:8080/lockbox/';

/******************************Login**********************************/
const LOGIN_TOKEN = `${BASE_URL}oauth/token`;
const USER_DETAILS = `${BASE_URL}core/v1/employee/detail?userId=`;
/******************************Screens********************************/
const FILTER_DEVICE = `${BASE_URL}core/v1/device/filter`;
const GENERATE_KEY = `${BASE_URL}core/v1/device/key/generator`;
const EMPLOYEE_ALL=`${BASE_URL}core/v1/employee/all?`;
const FILTER_KEY =  `${BASE_URL}core/v1/device/key/all`;
const HISTORY_KEY=`${BASE_URL}core/v1/activity/filter`;


export {
    BASE_URL,
    LOGIN_TOKEN,
    USER_DETAILS,
    FILTER_DEVICE,
    GENERATE_KEY,
    EMPLOYEE_ALL,
    FILTER_KEY,
    HISTORY_KEY
};