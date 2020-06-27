import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import ContentLoader from "react-content-loader";
import { Ionicons } from "@expo/vector-icons";

import { fetchFeed } from "../core/actions";
import PostList from "../common/PostList";
import Stories from "../common/Stories";
import { width, height } from "../constants";
import Header from "../common/Header";

const Feed = (props) => {
  useEffect(() => {
    props.fetchFeed();

    props.navigation.setOptions({
      header: () => (
        <Header
          title={"Instagram"}
          left={() => <Ionicons name={"ios-camera"} size={36} />}
          right={() => (
            <TouchableOpacity onPress={() => props.navigation.navigate("Dm")}>
              <Ionicons name={"ios-paper-plane"} size={36} />
            </TouchableOpacity>
          )}
        />
      ),
    });
  }, []);

  const onViewComments = (post) => {
    props.navigation.navigate("Comments", post);
  };

  const onStoryPressed = (story) => {
    props.navigation.navigate("Story", story);
  };

  const LoadPosts = () => {
    if (props.feed.fetching) {
      return (
        <ContentLoader
          speed={2}
          width={width}
          height={height}
          viewBox="0 0 400 475"
          backgroundColor="#d3d3d3"
          foregroundColor="#ecebeb"
        >
          <circle cx="31" cy="31" r="15" />
          <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
          <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
        </ContentLoader>
      );
    }

    if (props.feed.fetched && props.feed.data) {
      return (
        <PostList
          data={props.feed.data}
          onViewComments={(post) => onViewComments(post)}
        />
      );
    }

    return null;
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Stories onStoryPressed={(story) => onStoryPressed(story)} />
      {LoadPosts()}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    feed: state.feed,
    stories: state.stories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: (params) => dispatch(fetchFeed(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
