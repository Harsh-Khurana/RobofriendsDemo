import CHANGE_SEARCH_FIELD from './constants';

export const searchfield = (text) => {
	type:CHANGE_SEARCH_FIELD,
	payload:text
}