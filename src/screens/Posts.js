import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import PostList from "../common/PostList";

const Posts = (props) => {
  const post = props.route.params;
  const [list, setList] = useState([post]);

  useEffect(() => {
    props.navigation.setOptions({
     title: post.username
    })
  }, [])

  useEffect(() => {
    if (props.feed.fetched && props.feed.data) {
      setList([...list, ...props.feed.data.filter((item) => item.id !== post.id)]);
    }
  }, []);

  return (
      <PostList data={list} />
  )
};

const mapStateToProps = (state) => {
  return {
      feed: state.feed
  }
};

export default connect(mapStateToProps, null)(Posts);
