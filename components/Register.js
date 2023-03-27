import axios from "axios";
import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { firebasePath } from "../config/firebase";

const Register = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [conPassword, setConPassword] = React.useState("");

  const [formValid, setFormValid] = React.useState("");

  const submit = () => {
    checValid();

    const User = { username: username, email: email, password: password };
    axios.post(`${firebasePath}/users.json`, User);
  };

  const checValid = () => {};

  const goToLogin = () => {
    navigation.navigate("login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>foooo</Text>
      <TextInput
        style={styles.input}
        label="user name"
        value={username}
        onChangeText={(val) => setUsername(val)}
        direction="rtl"
        activeUnderlineColor="#154e5c"
      />
      <TextInput
        style={styles.input}
        label="email"
        value={email}
        onChangeText={(val) => setEmail(val)}
        direction="rtl"
        activeUnderlineColor="#154e5c"
      />
      <TextInput
        style={styles.input}
        label="password"
        value={password}
        onChangeText={(val) => setPassword(val)}
        direction="rtl"
        activeUnderlineColor="#154e5c"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        label="confirm password"
        value={conPassword}
        onChangeText={(val) => setConPassword(val)}
        activeUnderlineColor="#154e5c"
        textAlign="right"
        secureTextEntry={true}
      />

      <Button style={styles.btn} mode="contained" onPress={() => submit()}>
        confirm
      </Button>
      <Text onPress={goToLogin} style={styles.text2}>
        if you already have account click here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#567189",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text1: {
    fontSize: 50,
    fontWeight: 500,
    color: "#fff",
    padding: 15,
  },
  text2: {
    fontSize: 15,
    fontWeight: 400,
    color: "#bad9e0",
    padding: 5,
    paddingTop: 15,
  },
  input: {
    margin: 10,
    color: "red",
  },
  btn: {
    backgroundColor: "#154e5c",
  },
});

export default Register;
