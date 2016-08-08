import React, { Component } from 'react';

export default class SearchForm extends Component {
	render(){
		return (
	
			<div className="searchform">
				<form>
					<input type="text" placeholder="Search for a movie" autoFocus />
					<input type="submit" value="Search" />						
				</form>
			</div>
		)
	}
}