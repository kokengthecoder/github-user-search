import { SEARCH_USER, FETCH_USER, FETCH_REPO } from '../actions/action_types';

const INITIAL_STATE = { searched: [], user: null, user_repos: [] };

export default function(state = INITIAL_STATE, action ) {
	switch (action.type) {
	case SEARCH_USER:
		return { ...state, searched: action.payload.data.items }
	case FETCH_USER:
		return { ...state, user: action.payload.data }
	case FETCH_REPO:
		return { ...state, user_repos: action.payload.data }
	default:
		return state
	}
}