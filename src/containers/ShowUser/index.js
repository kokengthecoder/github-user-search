import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchRepo } from '../../actions/index';
import UserRepo from '../../components/UserRepo';
import UserInfo from '../../components/UserInfo';
import { Grid, Button, List, Segment, Divider } from 'semantic-ui-react';

class ShowUser extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		// get user information 
		this.props.fetchUser(this.props.params.username);
	} 

	componentWillReceiveProps(nextProps) {
		// get repos after successfully get user information
		if(nextProps.user !== this.props.user) {
			this.props.fetchRepo(nextProps.user.repos_url)
		}
	}

	render() {

		return (
			<Grid padded relaxed>
				<Grid.Column width={1} />
				<Grid.Column width={3}>
					<h1>User details</h1>
					<h3>{this.props.user? this.props.user.name : ''}</h3>
					<Button as={Link} to="/">Back</Button>
				</Grid.Column>
				<Grid.Column width={8}>
					<UserInfo user={this.props.user} />
				</Grid.Column>
				<Grid.Column width={1} />
				<Grid.Column width={3}>
					<UserRepo repos={this.props.repos} />
				</Grid.Column>
			</Grid>
		)
	}
}

function mapStateToProps({users}) {
	return { 
		user: users.user, 
		repos: users.user_repos 
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchUser,
		 	fetchRepo
		}
		, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);