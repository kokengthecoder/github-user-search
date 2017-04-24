import { FETCH_USER } from './action_types';
import axios from 'axios';

const ROOT_URL = 'https://api.github.com';

export function searchUser(user) {

	const url = `${ROOT_URL}/search/users?q=${user}`;
	const request = axios.get(url);

	return {
		type: FETCH_USER,
		payload: request
	}
}