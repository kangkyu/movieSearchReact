import React, { Component } from 'react';
import $ from 'jquery';

export default class SearchForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			movies: []
		}
		this.getMovies = this.getMovies.bind(this);
	}

	getMovies(e){
		//needs to be outside so state can flow down
		e.preventDefault();
		//let url="http://www.omdbapi.com/?";
		$.ajax({
	     	url:"http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json",
	     	dataType:'json',
	     	cache:false,
	     	success:function(movies){
	     		this.setState({movies:movies});
	     	}.bind(this),
	     	error:function(xhr, status, err){
	     		//console.error(this.props.url, status, err.toString());
	     	}.bind(this)
	    });

	}

	render(){
		return (
	
			<div className="searchform" onSubmit={this.getMovies}>
				<form>
					<input type="text" placeholder="Search for a movie" autoFocus />
					<input type="submit" value="Search"  />						
				</form>
			</div>
		)
	}
}