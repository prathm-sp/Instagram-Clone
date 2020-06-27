import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { width, height } from "../constants";

const TAP_DELAY = 300;

const Post = (props) => {
  const [liked, setLiked] = useState(false);
  const [lastTap, setLastTap] = useState(null);

  const onImgTap = () => {
    if (lastTap && Date.now() - lastTap < TAP_DELAY) {
      setLiked(true);
    } else {
      setLastTap(Date.now());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image style={styles.userPic} source={props.userpicture} />
        <Text style={styles.username}>{props.username}</Text>
      </View>

      <TouchableWithoutFeedback onPress={() => onImgTap()}>
        <Image style={styles.picture} source={props.picture} />
      </TouchableWithoutFeedback>

      <View style={styles.actionsHolder}>
        <View style={styles.actionsLeft}>
          <TouchableOpacity onPress={() => setLiked((prevLiked) => !prevLiked)}>
            <Ionicons
              name="ios-heart"
              size={32}
              color={liked ? "red" : "gray"}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <Ionicons
            name="ios-chatbubbles"
            size={32}
            color="gray"
            style={{ marginRight: 10 }}
          />
          <Ionicons
            name="ios-send"
            size={32}
            color="gray"
            style={{ marginRight: 10 }}
          />
        </View>
        <Ionicons name="ios-bookmark" size={32} color="gray" />
      </View>

      <Text style={styles.likes}>{`${props.lkes} likes`}</Text>

      <View style={styles.text}>
        <Text style={styles.username}>{props.username}</Text>
        <Text style={styles.caption}>{props.caption}</Text>
      </View>

      {props.comments && props.comments.length >0 ? (
        <TouchableOpacity onPress={() => props.onViewComments()}>
          <Text style={styles.comments}>{`View all ${props.comments.length} comments`}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  head: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,

  },
  userPic: {
    width: 45,
    height: 45,
    borderRadius: "100%",
    marginRight: 10,
  },
  username: {
    fontSize: 17,
    fontWeight: 600,
  },
  picture: {
    height: height / 2,
  },
  actionsHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  actionsLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  likes: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10,
  },
  text: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
  },
  caption: {
    fontSize: 17,
    fontWeight: 500,
    marginLeft: 10,
  },
  comments: {
      marginRight: 10,
      marginLeft: 10,
      color:'gray',
      marginTop: 5
  }
});

export default Post;
