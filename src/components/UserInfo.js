import React from 'react';
import { Segment } from 'semantic-ui-react';

const UserInfo = ({user}) => {

	const renderProps = (user) => {
		if (user) {
			// list all user's information 
			const list = Object.keys(user).map((prop) => {
				return (
					<Segment key={prop}>
						<strong>{prop}: </strong>{user[prop]}
					</Segment>
				)
			});

			return list;
		}
	}

	return(
		<div>
			<h2>Information</h2>
			<Segment.Group>
				{renderProps(user)}
			</Segment.Group>
		</div>
	)
}

export default UserInfo;