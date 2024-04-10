import { TextInput } from "react-native";

export default function TxtInputComponent({
  placeholder,
  style,
  onchange,
  valor,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      style={style}
      onChangeText={onchange}
      keyboardType="numeric"
      value={valor}
    />
  );
}
