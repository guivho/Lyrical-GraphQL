import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import getSong from '../queries/getSong'

class SongDetail extends Component {

	render() {
		if (this.props.data.loading) {
			return <div>Loading...</div>
		}
		console.log(this.props)
		const { id, title } = this.props.data.song
		return (
			<div>
				<h3>Song Detail: {title}</h3>
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