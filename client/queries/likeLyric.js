import gfq from 'graphql-tag'

export default gfq`
	mutation likeLyric($id: ID){
 		likeLyric(id: $id) {
    		id
    		likes
  		}
	}
`