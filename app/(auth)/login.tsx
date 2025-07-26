import Spacer from "@/components/Spacer";
import ThemedView from "@/components/ThemedView";
import { Link } from "expo-router";
import { StyleSheet, Pressable, Text } from "react-native";

export default function Login() {
  const handleSubmit = () => {
    console.log("Login button pressed");
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer>
        <Text>Login Page</Text>
      </Spacer>

      <Text>Please enter your credentials to log in.</Text>
      <Spacer height={40} />
      <Link href="/register">instead register</Link>
      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [styles.button, pressed && styles.presses]}
      >
        <Text>Login</Text>
      </Pressable>
    </ThemedView>
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
