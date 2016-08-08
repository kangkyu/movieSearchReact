import React, { Component } from 'react';

import MovieListing from './movielisting';

export default class MovieList extends Component {

	render(){
		let movies = this.props.movies.map((movie) => {
			return (
				<MovieListing title={movie.title} year={movie.year} review={movie.review} key={movie.id} id={movie.id}/>
			)
		})

		return (
			<div className="results">
				<table>
					<thead>
						<tr>
							<th>#</th>
							<th>Movie</th>
							<th>Description</th>
							<th>Review</th>
						</tr>
					</thead>
					<tbody>
						{movies}
					</tbody>
				</table>
			</div>
		)
	}
}