import { combineReducers } from 'redux';

import depositReducer from './depositReducer';
import fastDepositReducer from './fastDepositReducer';
import i18nReducer from './i18nReducer';
import withdrawReducer from './withdrawReducer';
import credentialsReducer from './credentialsReducer'
import navReducer from './navReducer';

export default combineReducers({
    deposits: depositReducer,
    fastDeposits: fastDepositReducer,
    withdraws: withdrawReducer,
    intl: i18nReducer,
    credentials: credentialsReducer,
    nav: navReducer,
});
