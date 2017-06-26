import gfq from 'graphql-tag'

export default gfq`
	query GetSong( $id: ID! ){
		song(id: $id) {
			id
			title
			lyrics {
				id
				content
				likes
			}
		}
	}
`