import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    searchSection: {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      zIndex: 1000,
      backgroundColor: "#fff",
      alignItems: 'center'
    },
    searchInputContainer: {
      backgroundColor: "#fff",
      width: "90%",
      marginVertical: 20,
      paddingVertical: 5,
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.37,
      shadowRadius: 5,
      elevation: 5
    },
    searchInput: {
       width: "100%",
       marginBottom: 0,
       borderBottomWidth: 0,
       
    },
    doctorName: {
      fontSize: 18,
    },
    doctorSpec: {
      fontSize: 16,
    },
    doctorsListContainer: {
      marginTop: 80
    },
    itemContainer: {
      padding: 15,
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#ccc"
    },
    doctorAvatar: {
      width: 60,
      height: 60,
      borderRadius: 50,
      backgroundColor: '#007bff',
      alignSelf: "flex-start",
      justifyContent: "center",
      alignItems: "center"
    },
    doctorAvatarText: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#fff"
    },
    doctorInfo: {
      alignItems: "flex-start",
      marginLeft: 15,
      marginTop:15
    },
    noDoctorsText: {
      textAlign: 'center', paddingTop: 10, fontSize: 20
    }
  });
