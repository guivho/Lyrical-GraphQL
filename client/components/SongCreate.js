import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { graphql } from 'react-apollo'

import fetchSongs from '../queries/fetchSongs'
import addSong from '../queries/addSong'

class SongCreate extends Component {
	constructor(props) {
		super(props)
		this.state = { title: '' }
	}

	onSubmit(event) {
		event.preventDefault()
		this.props.mutate({
			variables: {
				title: this.state.title
			},
			refetchQueries: [{
				query: fetchSongs
			}]
		}).then(() => hashHistory.push('/'))
	}

	render() {
		return (
			<div>
				<Link to='/'>Back</Link>
				<h3>Create Song</h3>
				<form onSubmit={this.onSubmit.bind(this)}>
					<label>Song Title:</label>
					<input
						onChange={event => this.setState({
							title: event.target.value
						})}
						value={this.state.title}
					/>
				</form>
			</div>
		)
	}
}

export default graphql(addSong)(SongCreate)