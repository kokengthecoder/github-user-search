import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ListUser from './ListUser';
import { Grid } from 'semantic-ui-react';

class HomeSearch extends Component {
	render() {
		return (
			<Grid centered>
				<Grid.Row>
					<h1>Github User Search</h1>
				</Grid.Row>
				<Grid.Row>
					<SearchBar />
				</Grid.Row>
				<Grid.Row>
					<ListUser />
				</Grid.Row>
			</Grid>
		)
	}
}

export default HomeSearch;