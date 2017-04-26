import React from 'react';
import { List } from 'semantic-ui-react';

const UserRepo = ({repos}) => {

	const renderRepo = (repo) => {
		return (
			<List.Item key={repo.id} as="a" href={repo.html_url} >
				{repo.name}
			</List.Item>
		)
	}

	return(
		<div>
			<h3>Repositories</h3>

			<List relaxed="very" bulleted>
				{repos.map(renderRepo)}
			</List>
		</div>
	)
}

export default UserRepo;