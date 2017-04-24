import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { searchUser } from '../../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { value: '' };

		this.onInputChange = this.onInputChange.bind(this);

	}

	onInputChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	onFormSubmit(e){
		e.preventDefault();
		this.props.searchUser(this.state.value);
	}

	render() {

		return (
			<Form onSubmit={this.onFormSubmit}>
				<Input
					onChange={this.onInputChange}
					value={this.state.value} 
					placeholder="Search by username..."
				/>
			</Form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);