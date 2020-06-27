import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Story = (props) => {
  const story = props.route.params;

  props.navigation.setOptions({
    header: () => null,
  });

  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      onStoryClose();
    }, 3000);

    return () => {
        clearTimeout(timer)
    }
  }, []);

  const onStoryClose = () => {
    props.navigation.goBack();
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={story.picture}>
      <View style={styles.head}>
        <View style={styles.left}>
          <Image style={styles.img} source={story.profilePic} />
          <Text style={styles.username}>{story.username}</Text>
        </View>
        <TouchableOpacity onPress={() => onStoryClose()}>
          <Ionicons
            name="ios-close"
            size={45}
            color={"white"}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  left: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: "100%",
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 600,
    color: "white",
  },
});

export default Story;
