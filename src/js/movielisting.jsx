import React, { Component } from 'react';

export default class MovieListing extends Component {

	render(){
		return (

			<tr>
				<td>
					<p><img src={this.props.poster} /></p>
				</td>
				<td>
					<p>{this.props.title}</p>
				</td>
				<td>
					<p>{this.props.year}</p>
					
				</td>
			</tr>
		)
	}
}