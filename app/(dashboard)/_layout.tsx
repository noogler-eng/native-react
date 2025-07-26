import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { colors } from "@/constants/color";
import ThemedView from "@/components/ThemedView";
import { Camera } from "lucide-react-native";

export default function DashboardLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return (
    <ThemedView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.background,
            borderTopColor: theme.border,
            paddingTop: 10,
            height: 60,
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen
          name="books"
          options={{
            title: "Books",
            tabBarIcon: ({ focused, color, size }) => (
              <Camera color={focused ? "white" : color} size={size} />
            ),
            tabBarLabel: "Books",
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ focused, color, size }) => (
              <Camera color={focused ? "white" : color} size={size} />
            ),
            tabBarLabel: "Create",
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused, color, size }) => (
              <Camera color={focused ? "white" : color} size={size} />
            ),
            tabBarLabel: "Profile",
          }}
        />
      </Tabs>
      {/* @ts-ignore */}
      {/* <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.text,
          headerTitleStyle: { fontFamily: "Courier New" },
        }}
      >
        <Stack.Screen name="books" options={{ title: "books" }} />
        <Stack.Screen name="create" options={{ title: "create" }} />
        <Stack.Screen name="profile" options={{ title: "profile" }} />
      </Stack> */}
    </ThemedView>
  );
}
