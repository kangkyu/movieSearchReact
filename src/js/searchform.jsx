import React, { Component } from 'react';
import $ from 'jquery';

export default class SearchForm extends Component {

	constructor(props){
		super(props);
		this.state = {
			term: ''
		};

		//otherwise the this value will be the form, not our class
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleGetMovies = this.handleGetMovies.bind(this);
	}
	handleTermChange(e){
		this.setState({term: e.target.value})
	}

	handleGetMovies(e){
		e.preventDefault();

		let term = this.state.term.trim();
		if(!term || term == '')
			return

		this.props.onTermSubmit({text:term});

		this.setState({term: ''});

	}

	render(){
		return (
	
			<div className="searchform" onSubmit={this.handleGetMovies}>
				<form>
					<input type="text" placeholder="Search for a movie" autoFocus onChange={this.handleTermChange}/>
					<input type="submit" value="Search"  />						
				</form>
			</div>
		)
	}
}