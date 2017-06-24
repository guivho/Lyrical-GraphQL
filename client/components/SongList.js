import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SongList extends Component {

	renderSongs() {
		const { songs } = this.props.data
		return songs.map(song => {
			return (
				<li className="collection-item" key={song.id}>
					{song.title}
				</li>
			)
		})
	}
	render() {
		const { loading, songs } = this.props.data
		if (loading) {
			return <div>Loading...</div>
		}
		if (songs === undefined) {
			return <div>No songs available...</div>
		}
		return (
			<ul className="collection">
				{this.renderSongs()}
			</ul>
		)
	}
}

const query = gql`
	{
		songs {
			id
			title
		}
	}
`

export default graphql(query)(SongList)