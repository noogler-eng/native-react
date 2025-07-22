import { Text, View, StyleSheet, Image, useColorScheme } from "react-native";
import { Link } from "expo-router";
import logo from "../assets/images/favicon.png";
import { colors } from "@/constants/color";
import ThemedCard from "@/components/ThemedCard";
import Spacer from "@/components/Spacer";

export default function Index() {
  // we are using react-native components directly here
  // View and Text are from react-native

  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image
        source={logo}
        style={{ width: 100, height: 100, marginVertical: 40 }}
      />
      <Text
        style={{
          color: theme.text,
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "Courier New",
        }}
      >
        Edit app/index.tsx to edit this screen.
      </Text>
      <Spacer />
      <Text
        style={{
          color: "red",
          fontFamily: "Courier New",
          marginTop: 10,
        }}
      >
        Edit app/index.tsx to edit this screen.
      </Text>
      <Spacer />

      <ThemedCard
        style={{
          backgroundColor: "gray",
          padding: 20,
          borderRadius: 10,
          marginTop: 20,
          width: "100%",
          maxWidth: 400,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // for Android
          elevation: 10,
        }}
      >
        <Text
          style={{
            color: theme.text,
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Hello this is a card
        </Text>
      </ThemedCard>

      <Link
        href="/about"
        style={{
          color: theme.text,
          fontFamily: "Courier New",
          fontSize: 16,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
      >
        /About
      </Link>
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
    padding: 20,
    // This does nothing in a View
    // color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 24,
  },
});
