import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1A1A1A",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "Courier New",
          marginVertical: 20,
        }}
      >
        This is the about page. You can edit this file to change the content.
      </Text>
      <Link
        href="/"
        style={{
          color: "white",
          fontFamily: "Courier New",
          fontSize: 16,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
      >
        /home
      </Link>
    </View>
  );
}
