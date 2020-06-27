import React, { useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import ContentLoader from "react-content-loader";

import { fetchStories } from "../core/actions";

const Story = ({ username, profilePic, onStoryPressed }) => {
  return (
    <TouchableOpacity style={styles.story} onPress={() => onStoryPressed()}>
      <LinearGradient
        colors={["#CA1D7E", "#E35157", "#F2703F"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          height: 82,
          width: 82,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 82 / 2,
        }}
      >
        <Image
          source={profilePic}
          style={{
            width: 75,
            height: 75,
            borderRadius: 75 / 2,
            alignSelf: "center",
            borderColor: "#fff",
            borderWidth: 3,
          }}
        />
      </LinearGradient>
      <Text style={styles.username}>{username}</Text>
    </TouchableOpacity>
  );
};

const Stories = ({ fetchStories, stories, onStoryPressed }) => {
  useEffect(() => {
    fetchStories();
  }, []);

  if (stories.fetching) { 
    return (
      <View style={styles.containerLoading}>
        <ContentLoader
          height={300}
          width={1060}
          speed={2}
          primaryColor="#d9d9d9"
          secondaryColor="#ecebeb"
        >
          {new Array(7).fill(1).map((item, x) => {
            return <circle cx={44 + 105 * (x - 1)} cy="42" r="38" />;
          })}
        </ContentLoader>
      </View>
    );
  }

  if (stories.fetched && stories.data) {
    return (
      <View style={styles.container}>
        <FlatList
          data={stories.data}
          renderItem={({ item }) => (
            <Story {...item} onStoryPressed={() => onStoryPressed(item)} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginBottom: 5,
    paddingTop: 5,
  },
  containerLoading: {
    height: 120,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginBottom: 5,
    paddingTop: 5,
  },
  story: {
    height: 120,
    marginRight: 10,
    marginLeft: 10,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: "100%",
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
  };
};

const mapDispatchToPRops = (dispatch) => {
  return {
    fetchStories: (params) => dispatch(fetchStories(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToPRops)(Stories);
