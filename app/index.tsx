import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  // we are using react-native components directly here
  // View and Text are from react-native

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

// we can also use StyleSheet to create styles
// this is optional, but recommended for better performance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
