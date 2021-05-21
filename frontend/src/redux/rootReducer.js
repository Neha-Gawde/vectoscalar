import {combineReducers} from 'redux';
import dashboardReducer from './Dashboard/DashboardReducer';

export default combineReducers(
    {
       content: dashboardReducer,
    }
)
