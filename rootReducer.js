import { combineReducers } from 'redux';
import { initiateTransactionReducer } from './src/domain/initiateTransaction/reducer';
import { sessionReducer } from './src/domain/session/reducer';

export default combineReducers({
    session : sessionReducer,
});