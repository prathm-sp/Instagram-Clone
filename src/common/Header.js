import React, {useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from 'expo-font'

const Header = (props) => {
  useEffect(() => {
    loadFont()
  }, [])

  async function loadFont() {
    await Font.loadAsync({
      Beauty: require('../../assets/fonts/BeautyMountainsPersonalUse-od7z.ttf')
    })
  }

  return (
    <View style={styles.container}>
      {props.left ? props.left() : null}
      <Text style={props.title === 'Instagram' ? styles.text : styles.text2}>{props.title}</Text>
      <View>
      {props.right ? props.right() : nullF}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    height: 60,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  text: {
    fontSize: 34,
    fontWeight: 600,
    fontFamily: 'Beauty'
  },
  text2: {
    fontSize: 24,
    fontWeight: 600, 
  },
});

export default Header;
