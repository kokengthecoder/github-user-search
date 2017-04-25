import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchRepo } from '../../actions/index';
import UserRepo from '../../components/UserRepo';

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

	renderProps(user) {
		if (user) {
			// list all user's information 
			const list = Object.keys(user).map((prop) => {
				return <li><strong>{prop}:</strong> {user[prop]}</li>
			});

			return list;
		}
	}

	render() {

		return (
			<div>
				<Link to="/">Back</Link>
				<h2>User details</h2>
				<ul>
					{this.renderProps(this.props.user)}
				</ul>
				<UserRepo repos={this.props.repos}/>
			</div>
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