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
	render(){
		return (
			<div>
				<h1>Search for Movies</h1>
				<SearchForm />
				<MovieList movies={movies} />
			</div>
		)
	}
}