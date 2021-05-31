import React, { Component } from 'react';


import { StyleSheet, Text, View, ImageBackground, TouchableNativeFeedback, AsyncStorage } from 'react-native';

import Button from "../components/Button";

import { NavigationEvents } from "react-navigation";


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    }
  }

  _checkToken = async () => {
    const token = await AsyncStorage.getItem("accessToken");
    this.setState({ token })
  }
  render() {
    return (
      <React.Fragment>
        <NavigationEvents onWillFocus={this._checkToken} />
        <ImageBackground source={require('../assets/doc-bg.png')} style={styles.background} >
          <View style={styles.container}>
            <View style={styles.textcontainer}>
              <Text style={styles.title}>اهلا بك في تطبيق طبيبي</Text>
              <Text style={styles.text}>التطبيق الاول للربط بين الطبيب والمرضى</Text>
            </View>
            {this.state.token ? (
              <Button text="استعرض قائمة الاطباء" onPress={() => this.props.navigation.navigate("Doctors")} />
              
            )
              :
              (
                <React.Fragment>
                  <Button text="تسجيل الدخول " onPress={() => this.props.navigation.navigate("SignIn")} />
                  <TouchableNativeFeedback onPress={() => this.props.navigation.navigate("SignUp")}>
                    <Text style={styles.registerButton}>انشاء حساب جديد</Text>
                  </TouchableNativeFeedback>
                </React.Fragment>
              )
            }
          </View>
        </ImageBackground>
      </React.Fragment>
    )
  }
}
const textStyles = {
  textAlign: "center",
  color: "#fff",
  fontFamily:'noto-font'
}
const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  textcontainer: {
    marginBottom: 30
  },
  title: {
    ...textStyles,
    fontSize: 30,

  },
  text: {
    ...textStyles,
    fontSize: 20
  },
  registerButton: {
    ...textStyles,
    fontSize: 16,
    marginTop: 10
  }
});


export default HomeScreen;