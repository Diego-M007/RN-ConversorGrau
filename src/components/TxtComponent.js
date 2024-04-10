import { Text } from "react-native";

export default function TxtComponent({ txt, resultado, style, celsius }) {
  return (
    <Text style={style}>
      {resultado}
      {celsius}
      {txt}
    </Text>
  );
}
