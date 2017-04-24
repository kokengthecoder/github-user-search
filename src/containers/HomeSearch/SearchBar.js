import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { searchUser } from '../../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { value: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	// handle input changes and set to state for calling action
	onInputChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	onFormSubmit(e){
		// prevent website from refreshing
		e.preventDefault();

		// call the action to fetch this user data
		this.props.searchUser(this.state.value);
	}

	render() {

		return (
			<Form onSubmit={this.onFormSubmit}>
				<Input
					onChange={this.onInputChange}
					value={this.state.value} 
					placeholder="Search by username..."
					action={{icon: 'search'}}
				/>
			</Form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);