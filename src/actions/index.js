import { SEARCH_USER, FETCH_USER, FETCH_REPO } from './action_types';
import axios from 'axios';

const ROOT_URL = 'https://api.github.com';

export function searchUser(user) {

	const url = `${ROOT_URL}/search/users?q=${user}`;
	const request = axios.get(url);

	return {
		type: SEARCH_USER,
		payload: request
	}
}

export function fetchUser(user) {

	const url = `${ROOT_URL}/users/${user}`;
	const request = axios.get(url);

	return {
		type: FETCH_USER,
		payload: request
	}
}

export function fetchRepo(url) {
	const request = axios.get(url);

	return {
		type: FETCH_REPO,
		payload: request
	}
}
