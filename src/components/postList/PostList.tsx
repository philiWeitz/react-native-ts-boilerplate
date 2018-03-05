
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

import { graphql } from 'react-apollo';
import query from '../../graphql/query';

const PostList = ({ data: { posts, loading } }) => {

  const renderLoading = () => {
    return <Text>Loading...</Text>;
  };

  const renderPosts = () => {
    if (posts) {
      return (
        <View>
          {posts.map((post, id) => {
            return <Text key={`post-${id}`}>{post.title}, {post.votes}</Text>;
          })}
        </View>
      );
    }
    return null;
  };

  const renderContent = () => {
    return (
      <View>
        <Text>GraphQL Query Example</Text>
        {loading ? renderLoading() : renderPosts()}
      </View>
    );
  };

  return renderContent();
};

export default graphql(query.getPostsQuery())(PostList as any);
