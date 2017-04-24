import { FETCH_USER } from '../actions/action_types';

export default function(state = [], action ) {
	switch (action.type) {
	case FETCH_USER:
		return action.payload.data.items
	default:
		return state
	}
}