import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 20,
    alignItems: "center",
    margin: 10,
    padding: 15,
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});
export default NumberContainer;
