import Spacer from "@/components/Spacer";
import ThemedView from "@/components/ThemedView";
import UseUser from "@/hooks/useUser";
import { Link } from "expo-router";
import { useContext, useState } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { user, login } = UseUser();

  const handleSubmit = () => {
    console.log("Login button pressed", credentials);
    try {
      login(credentials.email, credentials.password);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // whenever we press anywhere outside the TextInput, we want to dismiss the keyboard
  // this is a common pattern in React Native to improve user experience, TouchableWithoutFeedback
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        3
        <Spacer>
          <Text>Login Page</Text>
        </Spacer>
        <Text>Please enter your credentials to log in.</Text>
        <Spacer height={40} />
        <Link href="/register">instead register</Link>
        <Spacer height={20} />
        <TextInput
          placeholder="email"
          style={{
            color: "white",
            borderColor: "white",
            borderStyle: "solid",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            width: "100%",
            maxWidth: 400,
            fontFamily: "Courier New",
            fontSize: 20,
          }}
          onChangeText={(text: string) => {
            setCredentials({
              ...credentials,
              email: text,
            });
          }}
          value={credentials.email}
        />
        <Spacer height={10} />
        <TextInput
          placeholder="password"
          style={{
            color: "white",
            borderColor: "white",
            borderStyle: "solid",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            width: "100%",
            maxWidth: 400,
            fontFamily: "Courier New",
            fontSize: 20,
          }}
          onChangeText={(text: string) => {
            setCredentials({
              ...credentials,
              password: text,
            });
          }}
          value={credentials.password}
        />
        <Spacer height={20} />
        <Pressable
          onPress={handleSubmit}
          style={({ pressed }) => [styles.button, pressed && styles.presses]}
        >
          <Text>Login</Text>
        </Pressable>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 20,
    fontFamily: "Courier New",
    color: "black",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  presses: {
    opacity: 0.8,
    backgroundColor: "lightgray",
  },
});
