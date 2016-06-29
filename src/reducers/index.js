import { combineReducers } from 'redux';
import wallets from './reducer_wallets';

const rootReducer = combineReducers({
  wallets
});

export default rootReducer;
