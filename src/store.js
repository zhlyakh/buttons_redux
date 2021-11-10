import {createStore} from "redux";
import {colorReducer} from './reducers/paintButton';

export const store = createStore(colorReducer);