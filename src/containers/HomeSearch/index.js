import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ListUser from './ListUser';

class HomeSearch extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<ListUser />
			</div>
		)
	}
}

export default HomeSearch;