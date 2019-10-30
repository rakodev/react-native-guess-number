import React from "react";
import { View, Text, StyleSheet } from "react-native";

import BodyText from "../components/BodyText";

const ListItems = props => {
  return (
    <View key={props.value} style={styles.listItem}>
      <BodyText>#{props.index}</BodyText>
      <BodyText>{props.value}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  }
});

export default ListItems;
