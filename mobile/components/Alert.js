import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default ({ messages, type }) => {
  const messageType = {
     success:  '#28a745',
     danger: '#dc3545',
  };

  if (!messages) {
      return null;
  }

  return (
    <View style={styles.container}>

      {typeof messages === 'string' ?
        <View style={[styles.alert, {backgroundColor: messageType[type]}]}>
            <Text style={styles.alertText}>{messages}</Text>
        </View>
      : messages.map((message, index) => (
        <View style={[styles.alert, {backgroundColor: messageType[type]}]} key={index}>
          <Text style={styles.alertText}>{message}</Text>
        </View>
      ))}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: StatusBar.currentHeight,
    right: 0,
    left: 0,
    padding: 10,
    zIndex: 1000,
  },
  alert: {
      backgroundColor: 'red',
      padding: 10,
      marginBottom: 10
  },
  alertText: {
      fontSize: 16,
      color: '#fff',
      lineHeight: 16,
      textAlign: 'center'
  }
});
