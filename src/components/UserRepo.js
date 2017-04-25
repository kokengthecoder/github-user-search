import React from 'react';

const UserRepo = ({repos}) => {

	const renderRepo = (repo) => {
		return <li>{repo.full_name}</li>
	}

	return(
		<div>
			<h3>Repositories</h3>

			<ul>
				{repos.map(renderRepo)}
			</ul>
		</div>
	)
}

export default UserRepo;