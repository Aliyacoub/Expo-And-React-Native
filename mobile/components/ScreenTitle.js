import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";


export default ({title, icon}) => (
  <View style={styles.container}>
    <Ionicons
      name={icon}
      size={ 100 }
      style={styles.icon}
    />
    <Text style={styles.text}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 30
    },
    icon: {
        color:'#007bff',
         marginBottom: 10
    },
    text: {
        fontSize: 25,
    }
})