import React, { Component } from 'react';
import HomeSearch from './HomeSearch';
import ShowUser from './ShowUser';

export default class App extends Component {
  render() {
    return (
    	<div>
	      {this.props.children}
    	</div>
	  );
  }
}

