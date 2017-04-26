import React, { Component } from 'react';
import HomeSearch from './HomeSearch';
import ShowUser from './ShowUser';
import { Grid } from 'semantic-ui-react';

export default class App extends Component {
  render() {
    return (
    	<Grid>
    		<Grid.Column>
		      {this.props.children}
    		</Grid.Column>
    	</Grid>
	  );
  }
}

