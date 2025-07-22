import { Stack } from "expo-router";
import { Text, View } from "react-native";

// stack is used to render the navigation stack
// it will render the current screen and any nested screens
// it will also handle the navigation between screens
// you can use the Link component to navigate between screens

// we can open the stack and mention the screens we want to render
// the stack will automatically handle the navigation between these screens
export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1A1A1A" }}>
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "#1A1A1A" },
          headerTintColor: "white",
          headerTitleStyle: { fontFamily: "Courier New" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          name="about"
          options={{ title: "About", headerShown: false }}
        />
      </Stack>
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
