import Spacer from "@/components/Spacer";
import ThemedView from "@/components/ThemedView";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Books() {
  return (
    <ThemedView style={styles.container}>
      <Spacer>
        <Text>Books Page</Text>
      </Spacer>

      <Text style={{ color: "white", fontWeight: '900' }}>Explore our collection of books!</Text>
      <Spacer height={40} />
      <Link href="/">/home</Link>
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
