
import gql from 'graphql-tag';


abstract class Query {

  static getPostsQuery = () => gql(`
    query allPosts {
      posts {
        title
        votes
        author {
          firstName
          lastName
        }
      }
    }
  `)

}

export default Query;
