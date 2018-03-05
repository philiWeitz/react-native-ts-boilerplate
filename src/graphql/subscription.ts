
import gql from 'graphql-tag';
import graphQLClient from './graphQLClient';


abstract class Subscription {

  static subscribePostsQuery = postId => gql(`
    subscription subscribePosts {
      postUpVoted(postId: ${postId}) {
        title,
        votes
      }
    }
  `)

  static subscribePosts = (postId) => {
    return graphQLClient.subscribe({
      query: Subscription.subscribePostsQuery(postId),
    });
  }
}

export default Subscription;
