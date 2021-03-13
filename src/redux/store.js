// place where other components can pull the application state
import { createStore } from 'redux';
import reducer from './reducer';

export default createStore(reducer);
