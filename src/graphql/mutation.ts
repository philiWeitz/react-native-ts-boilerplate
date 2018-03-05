
import gql from 'graphql-tag';
import graphQLClient from './graphQLClient';


abstract class Mutation {

  static upVotePostQuery = postId => gql(`
    mutation {
      upvotePost(postId: ${postId}) {
        title,
        votes
      }
    }
  `)

  static upVotePost = (postId : number) : Promise<any> => {
    return graphQLClient.mutate({
      mutation: Mutation.upVotePostQuery(postId),
    });
  }
}

export default Mutation;
