import {createStore} from 'redux';
import counter  from '../reducers/couter';

let store = createStore(counter);

export default store;
