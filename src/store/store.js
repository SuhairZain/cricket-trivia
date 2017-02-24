import {
    combineReducers,
    createStore,
} from 'redux';

import results from './results';

export default createStore(combineReducers({
    results,
}));
