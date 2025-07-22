import { View } from "react-native";

export default function Spacer({ width = "100%", height = 20 }: any) {
  return <View style={{ width, height }} />;
}
