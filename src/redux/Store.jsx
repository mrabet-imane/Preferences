import { createStore } from 'redux';
import reducerPreference from './ReducerPreference';

const store = createStore(reducerPreference);
export default store;
