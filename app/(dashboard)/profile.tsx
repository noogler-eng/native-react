import Spacer from "@/components/Spacer";
import ThemedView from "@/components/ThemedView";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Profile() {
  return (
    <ThemedView style={styles.container}>
      <Spacer>
        <Text>Profile Page</Text>
      </Spacer>

      <Text style={{ color: "white", fontWeight: '900' }}>Welcome to your profile!</Text>
      <Spacer height={40} />
      <Link href="/">Go to home</Link>
    </ThemedView>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};
