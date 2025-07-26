import Spacer from "@/components/Spacer";
import ThemedView from "@/components/ThemedView";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Register() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Spacer>
        <Text>Register Page</Text>
      </Spacer>

      <Text>Please fill in the form to create a new account.</Text>
      <Spacer height={40} />
      <Link href="/login">Already have an account? Log in</Link>
      <Spacer height={20} />
      <Link href="/about">Go to About Page</Link>
      <Spacer height={20} />
      <Link href="/">Back to Home</Link>
    </ThemedView>
  );
}
