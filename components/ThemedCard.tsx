import { colors } from "@/constants/color";
import { useColorScheme, View } from "react-native";

export default function ThemedCard({ children, style, ...props }: any) {
  // useColorScheme is used to get the current color scheme of the device
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return (
    <View
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    >
      {children}
    </View>
  );
}
