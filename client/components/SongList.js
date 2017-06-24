import React, { Component } from 'react'
import { Link } from 'react-router'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import fetchSongs from '../queries/fetchSongs'

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

export default graphql(fetchSongs)(SongList)