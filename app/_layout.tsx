import { Stack } from "expo-router";
import { Text, useColorScheme, View } from "react-native";
import { colors } from "@/constants/color";
import { StatusBar } from "expo-status-bar";

// stack is used to render the navigation stack
// it will render the current screen and any nested screens
// it will also handle the navigation between screens
// you can use the Link component to navigate between screens

// we can open the stack and mention the screens we want to render
// the stack will automatically handle the navigation between these screens
export default function RootLayout() {
  // useColorScheme is used to get the current color scheme of the device
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {/* @ts-ignore */}
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.text,
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
          color: theme.text,
          marginVertical: 20,
          fontFamily: "Courier New",
        }}
      >
        Footer
      </Text>
    </View>
  );
}
