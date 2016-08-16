import React from 'react';
import { Component } from 'react';

import SearchForm from './searchform';
import MovieList from './movielist';
import $ from 'jquery';

//const movies = []

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			movies: []
		}
		this.handleTermSubmit = this.handleTermSubmit.bind(this)
	}

	handleTermSubmit(term){
		term = term.text;
		console.log('submit', term)
		let url=`http://www.omdbapi.com/?s=${term}&r=json`;

		$.ajax({
	     	url:url,
	     	dataType:'json',
	     	cache:false,
	     	success:function(results){
	     		console.log(results)
	     		let movies = results.Search
	     		this.setState({movies:movies});
	     		//console.log(this.state.movies.Title);
	     	}.bind(this),
	     	error:function(xhr, status, err){
	     		//console.error(this.props.url, status, err.toString());
	     	}.bind(this)
	    });
	}

	render(){
		return (
			<div>
				<h1>Search for Movies</h1>
				<SearchForm onTermSubmit={this.handleTermSubmit}/>
				<MovieList movies={this.state.movies} />
			</div>
		)
	}
}
