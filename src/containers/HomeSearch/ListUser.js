import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container, List, Image } from 'semantic-ui-react';
import { Link } from 'react-router';

class ListUser extends Component {

	renderList(user) {
		return (
			<List.Item key={user.id} as={Link} to={`/users/${user.login}`}>
				<Image avatar src={user.avatar_url} floated="left" />
				<List.Content verticalAlign="middle" floated="left" >
					<List.Description>
						{user.login}
					</List.Description>
				</List.Content>
			</List.Item>
		)
	}

	render() {
		return (
			<Grid centered>
				<Grid.Column mobile={8} tablet={6} computer={4}>
					<Container>
						<List relaxed="very" animated verticalAlign="middle">
							{this.props.users.map(this.renderList)}
						</List>
					</Container>
				</Grid.Column>
			</Grid>
		)
	}

} 

function mapStateToProps({users}) {
	return { users: users.searched }
}

export default connect(mapStateToProps)(ListUser);