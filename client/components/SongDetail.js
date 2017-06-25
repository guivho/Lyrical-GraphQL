import React, { Component } from 'react'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import getSong from '../queries/getSong'

class SongDetail extends Component {

	showSong(song) {
		const { id, title } = song
		return (
			<h3>{title}</h3>
		)
	}

	render() {
		const { song } = this.props.data
		return (
			<div>
				<Link to='/'>Back</Link>
				<div>
					{song ? this.showSong(song) : ''}
				</div>
			</div>
		)
	}
}

export default graphql(getSong, {
	options: (props) => {
		return {
			variables: {
				id: props.params.id
			}
		}
	}
})(SongDetail)