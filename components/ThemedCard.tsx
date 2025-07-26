import { colors } from "@/constants/color";
import { useColorScheme, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function ThemedCard({ children, style, ...props }: any) {
  // useColorScheme is used to get the current color scheme of the device
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  // A special kind of View that automatically adjusts its padding to avoid overlaps with
  // any of the ....
  // Should wrap top-level views in your app to respect the safe area boundaries.

  // this makes the view to be safeAreaView by adding style to view
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
}
