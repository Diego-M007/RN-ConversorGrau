import { TouchableOpacity, Text } from "react-native";

export default function ButtonComponent({ txt, funcao, style, styletxt }) {
  return (
    <TouchableOpacity style={style} onPress={funcao}>
      <Text style={styletxt}>{txt}</Text>
    </TouchableOpacity>
  );
}
