import { combineReducers } from 'redux';
import cars from './cars';
import search from './search';
import page from './page';

const reducers = combineReducers({ cars, search, page });

export default reducers;