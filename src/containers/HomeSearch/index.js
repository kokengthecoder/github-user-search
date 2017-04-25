import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ListUser from './ListUser';

class HomeSearch extends Component {
	render() {
		return (
			<div>
				<h1>Github User Search</h1>
				<SearchBar />
				<ListUser />
			</div>
		)
	}
}

export default HomeSearch;