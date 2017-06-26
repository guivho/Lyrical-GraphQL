import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import likeLyric from '../queries/likeLyric'

class LyricList extends Component {

	constructor(props) {
		super(props)
		console.log('LyricList constructor', props)
	}

	onLikeLyric(id) {
		this.props.mutate({
			variables: {
				id
			}
		})
	}

	listLyrics(lyrics) {
		return lyrics.map(({ id, likes, content }) => {
			return (
				<li
					key={id}
					className='collection-item'
				>
					{content}
					<div className='vote-box'>
						{likes}
						<i
							className='material-icons'
							onClick={() => this.onLikeLyric(id)}
						>
							thumb_up
						</i>
					</div>
				</li>
			)
		})
	}

	render() {
		const { lyrics } = this.props.song
		return (
			<ul className='collection'>
				{this.listLyrics(lyrics)}
			</ul>
		)
	}
}

export default graphql(likeLyric)(LyricList)