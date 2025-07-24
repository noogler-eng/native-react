import { colors } from "@/constants/color";
import { Link } from "expo-router";
import { useColorScheme, Text, View } from "react-native";

export default function About() {
  const colorScheme = useColorScheme();
  const safeScheme = colorScheme === "dark" ? "dark" : "light";
  const theme = safeScheme === "dark" ? colors.dark : colors.light;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: theme.text,
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "Courier New",
          marginVertical: 20,
        }}
      >
        This is the about page. You can edit this file to change the content.
      </Text>
      <Link href="/">
        <Text
          style={{
            color: theme.text,
            textDecorationLine: "underline",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          /Home
        </Text>
      </Link>
    </View>
  );
}
