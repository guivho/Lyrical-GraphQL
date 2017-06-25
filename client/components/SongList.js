import React, { Component } from 'react'
import { Link } from 'react-router'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import fetchSongs from '../queries/fetchSongs'
import deleteSong from '../queries/deleteSong'

class SongList extends Component {

	onSongDelete(id) {
		this.props.mutate({
			variables: { id }
		})
			.then(() => this.props.data.refetch())
	}

	renderSongs() {
		const { songs } = this.props.data
		return songs.map(({ id, title }) => {
			return (
				<li className="collection-item" key={id}>
					<Link to={`/songs/${id}`}>
						{title}
					</Link>
					<i className='material-icons'
						onClick={() => this.onSongDelete(id)} >
						delete
					</i>
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
			<div>
				<ul className="collection">
					{this.renderSongs()}
				</ul>
				<Link
					to='/songs/new'
					className='btn-floating btn-large red right'
				>
					<i className='material-icons'>add</i>
				</Link>
			</div >
		)
	}
}

export default graphql(deleteSong)(
	graphql(fetchSongs)(SongList)
)