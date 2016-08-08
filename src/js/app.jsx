import React from 'react';
import { Component } from 'react';

import SearchForm from './searchform';
import MovieList from './movielist';

const movies = [{
	id:1,
	title:"Rocky",
	year:"2001",
	review:"***"
},
{
	id:2,
	title:"The Shining",
	year:"1982",
	review:"****"
},
{
	id:3,
	title:"Star Wars",
	year:"1978",
	review:"****"
}]

export default class App extends Component {
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
	handleTermSubmit(term){
		console.log('submit', term)
	}

	render(){
		return (
			<div>
				<h1>Search for Movies</h1>
				<SearchForm onTermSubmit={this.handleTermSubmit}/>
				<MovieList movies={movies} />
			</div>
		)
	}
}