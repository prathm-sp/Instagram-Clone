import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Comment = ({ comment, picture, username }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.profilePic} source={picture} />
      <View style={styles.text}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
}; 

const Comments = (props) => {
  const post = props.route.params;

  return (
    <View>
      {post.comments.map((comment) => (
        <Comment {...comment} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingRight: 10,
      paddingLeft: 10,
      marginBottom: 10
  },
  text: {
      paddingLeft: 10,
      paddingRight: 10,

  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: '100%'
  },
  username: {
      fontSize: 17,
      fontWeight:600
  }, 
  comment: {
    fontSize: 17,
    fontWeight:500
}
});

export default Comments;
