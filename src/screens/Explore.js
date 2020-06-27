import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { fetchFeed } from "../core/actions";
import Grid from "../common/Grid";

const Explore = (props) => {
  useEffect(() => {
    props.fetchFeed();

    props.navigation.setOptions({
      header: () => null
    })
  }, []);

  const onThumbPress = (post) => {
      props.navigation.navigate('Posts', post)
  }

  if (props.feed.fetched && props.feed.data) {
    return <Grid data={props.feed.data} onThumbPress={(post) => onThumbPress(post)} />;
  }

  return null;
};

const mapStateToProps = (state) => {
  return {
    feed: state.feed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: (params) => dispatch(fetchFeed(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
