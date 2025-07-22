import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1A1A1A" }}>
      <Stack />
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "white",
          marginVertical: 20,
          fontFamily: "Courier New",
        }}
      >
        Footer
      </Text>
    </View>
  );
}
