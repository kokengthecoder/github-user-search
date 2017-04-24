import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Image } from 'semantic-ui-react';
import { Link } from 'react-router';

class ListUser extends Component {

	renderList(user) {
		return (
			<List.Item key={user.id} as={Link} >
				<Image avatar src={user.avatar_url} />
				<List.Content>
					<List.Description>
						{user.login}
					</List.Description>
				</List.Content>
			</List.Item>
		)
	}

	render() {
		return (
			<List relaxed="very" animated>
				{this.props.users.map(this.renderList)}
			</List>
		)
	}

} 

function mapStateToProps({users}) {
	return { users }
}

export default connect(mapStateToProps)(ListUser);