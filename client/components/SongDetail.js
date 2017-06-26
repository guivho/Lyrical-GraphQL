import React, { Component } from 'react'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import getSong from '../queries/getSong'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'

class SongDetail extends Component {

	render() {
		const { song } = this.props.data
		if (!song) return <div></div>
		const { id, title } = song
		return (
			<div>
				<Link to='/'>Back</Link>
				<div>
					<h3>{title}</h3>
					<LyricList song={song} />
					<LyricCreate songId={id} />
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