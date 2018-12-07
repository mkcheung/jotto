import { combineReducers } from 'redux';

import secretWord from './secretWordReducer';

import success from './successReducer';

import guessedWords from './guessedWordsReducer';

export default combineReducers({
	success,
	guessedWords,
	secretWord
});