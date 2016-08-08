import React, { Component } from 'react';

export default class MovieListing extends Component {
	render(){
		return (
			<tr>
				<td>
					<p>{this.props.id}</p>
				</td>
				<td>
					<p>{this.props.title}</p>
				</td>
				<td>
					<p>{this.props.year}</p>
					
				</td>
				<td>
					<p>{this.props.review}</p>
				</td>
			</tr>
		)
	}
}