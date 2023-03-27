import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const Login = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const submit = () => {};

  const goToRegistration = () => {
    navigation.navigate("register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>foooo</Text>
      <TextInput
        style={styles.input}
        label="email"
        value={text}
        onChangeText={(text) => setText(text)}
        direction="rtl"
        activeUnderlineColor="#154e5c"
      />
      <TextInput
        style={styles.input}
        label="password"
        value={text}
        onChangeText={(text) => setText(text)}
        activeUnderlineColor="#154e5c"
        textAlign="right"
      />

      <Button style={styles.btn} mode="contained" onPress={() => submit()}>
        Login
      </Button>
      <Text style={styles.text2} onPress={goToRegistration}>
        for registretion click here
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

export default Login;
