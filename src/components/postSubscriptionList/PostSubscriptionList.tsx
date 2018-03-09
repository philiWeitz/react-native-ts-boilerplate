
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

import { graphql } from 'react-apollo';

import styles from './styles';
import subscription from '../../graphql/subscription';


const PostSubscriptionList = ({ data: { postUpVoted, loading } }) => {

  const renderLoading = () => {
    return <Text>Waiting for data...</Text>;
  };

  const renderPosts = () => {
    if (postUpVoted) {
      return (
        <View>
          <Text>{postUpVoted.title}, votes: {postUpVoted.votes}</Text>
        </View>
      );
    }
    return null;
  };

  const renderContent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>GraphQL Subscription Example</Text>
        {loading ? renderLoading() : renderPosts()}
      </View>
    );
  };

  return renderContent();
};

export default graphql(subscription.subscribePostsQuery(1))(PostSubscriptionList as any);
