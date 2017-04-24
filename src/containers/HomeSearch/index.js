import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

class HomeSearch extends Component {

	constructor(props) {
		super(props)

		this.state = {
			isloading: false,
			results: [],
			value: ''
		}
	}

	handleSearchChange = (e, value) => {
		this.setState({ isloading: true, value })
	}

	render() {

		const { isloading, value, results } = this.state

		return (
			<Search 
				loading={isloading}
        onSearchChange={this.handleSearchChange}
				results={results}
				value={value}
				{...this.props}
			/>
		)
	}
}

export default HomeSearch;