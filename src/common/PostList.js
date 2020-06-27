import React from "react";
import { SafeAreaView, FlatList, Text, StyleSheet } from "react-native";

import Post from './Post'

const PostList = ({ data, onViewComments }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Post {...item} onViewComments={() => onViewComments(item)} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostList;
