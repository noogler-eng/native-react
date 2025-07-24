import Spacer from "@/components/Spacer";
import ThemedView from "@/components/ThemedView";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Create() {
  return (
    <ThemedView style={styles.container}>
      <Spacer>
        <Text>Create Page</Text>
      </Spacer>

      <Text style={{ color: "white", fontWeight: '900' }}>Here you can create new items!</Text>
      <Spacer height={40} />
      <Link href="/profile">Back to profile</Link>
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
