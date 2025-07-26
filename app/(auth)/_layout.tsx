import { Stack } from "expo-router";
import { Text, useColorScheme, View } from "react-native";
import { colors } from "@/constants/color";
import { StatusBar } from "expo-status-bar";
import ThemedView from "@/components/ThemedView";

// stack is used to render the navigation stack
// it will render the current screen and any nested screens
// it will also handle the navigation between screens
// you can use the Link component to navigate between screens

// we can open the stack and mention the screens we want to render
// the stack will automatically handle the navigation between these screens
export default function AuthLayout() {
  // useColorScheme is used to get the current color scheme of the device
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return (
    <ThemedView style={{ flex: 1 }}>
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
        <Stack.Screen name="login" options={{ title: 'auth here login:' }} />
        <Stack.Screen name="register" options={{ title: "New Here!" }} />
      </Stack>
    </ThemedView>
  );
}
