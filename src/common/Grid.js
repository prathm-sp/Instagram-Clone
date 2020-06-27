import React from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import { width } from "../constants";

const Grid = (props) => {
  const makeData = (data) => {
    let array = [];

    for (let i = 0; i < data.length; i += 3) {
      array.push(data.slice(i, i + 3));
    }

    return array;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={makeData([...props.data, ...props.data])}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              {item.map((thumb) => {
                return <TouchableWithoutFeedback onPress={() => props.onThumbPress(thumb)}>
                  <Image source={thumb.picture} style={styles.picture} />
                </TouchableWithoutFeedback>
              })}
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  picture: {
    width: width / 3,
    height: width / 3,
  },
});

export default Grid;
