import React from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

export default ({ title, loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={75} color="#20c997" />
      {title && <Text style={styles.text}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#fff",
    zIndex: 9999
  },
  text: {
    color: "#000",
    marginTop: 15,
    fontSize: 18
  }
});
