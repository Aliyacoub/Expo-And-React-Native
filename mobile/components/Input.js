import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Input extends React.Component {
  state = {
    focused: false
  };

  render() {
    const {
      onChangeText,
      inputStyles,
      value,
      placeholder,
      secureTextEntry,
      icon
    } = this.props;
    return (
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              inputStyles,
              this.state.focused && styles.focused
            ]}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
          />

           {icon && <Ionicons name={icon} size={30} color="#ccc" style={styles.icon} />}
        </View>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    width: 300,
    fontSize: 18,
    padding: 5,
    marginBottom: 30,
    textAlign: "right"
  },
  focused: {
    borderBottomColor: '#007bff'
  },
  icon: {
    position: 'absolute', left: 10
  }
});
