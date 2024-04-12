import { Image } from "react-native";

export default function ImageComponent({ img, style }) {
  return <Image source={img} style={style} />;
}
