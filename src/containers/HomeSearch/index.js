import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

class HomeSearch extends Component {
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state);
	return { users: state.users }
}

export default connect(mapStateToProps)(HomeSearch);