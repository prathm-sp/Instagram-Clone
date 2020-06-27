import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { fetchDm, fetchUser } from "../core/actions";
import Header from "../common/Header";

const Dm = (props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    props.fetchDm();
    props.fetchUser();
  }, []);

  useEffect(() => {
    props.navigation.setOptions({
      header: () => (
        <Header
          left={() => (
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={38} />
            </TouchableOpacity>
          )}
          title={username ? username : "Direct"}
          right={() => null}
        />
      ),
    });
  }, [username]);

  useEffect(() => {
    if (props.user.fetched && props.user.data) {
      setUsername(props.user.data.username);
      console.log(props.user.data.username);
    }
  }, [props.user]);

  if (props.dm.fetched && props.dm.data) {
    return (
      <View style={styles.container}>
        {props.dm.data.map((dm) => {
          return (
            <View style={styles.dm}>
              <View style={styles.left}>
                <Image style={styles.profileImg} source={dm.profilePic} />
                <View>
                  <Text style={styles.username}>{dm.username}</Text>
                  <Text style={styles.mesage}>{dm.message}</Text>
                </View>
              </View>

              <Ionicons name="ios-camera" size={32} color={"gray"} />
            </View>
          );
        })}
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  dm: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: "100%",
    marginRight: 10,
  },
  left: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  username: {
    fontSize: 17,
    fontWeight: 600,
  },
  message: {
    fontSize: 17,
    fontWeight: 500,
    color: "gray",
  },
});

const mapStateToProps = (state) => {
  return {
    dm: state.dm,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDm: (params) => dispatch(fetchDm(params)),
    fetchUser: (params) => dispatch(fetchUser(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dm);
