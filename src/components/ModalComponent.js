import { View, Modal } from "react-native";
import ButtonComponent from "./ButtonComponent";
import TxtComponent from "./TxtComponent";
import ImageComponent from "./ImageComponent";
import { styles } from "../style/style";

export default function ModalComponent({
  visible,
  zerar,
  imagem,
  mensagem,
  celsius,
  resultado,
}) {
  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TxtComponent
            style={styles.txt}
            celsius={celsius}
            txt="ºC Celsius em Fahrenheit é igual a:"
          />
          <TxtComponent resultado={resultado} txt="°F" style={styles.result} />
          <ImageComponent img={imagem} style={styles.styleimagem} />
          <TxtComponent txt={mensagem} style={styles.result} />
          <ButtonComponent
            txt="Recalcular"
            funcao={zerar}
            style={styles.zerar}
            styletxt={styles.txtZerar}
          />
        </View>
      </View>
    </Modal>
  );
}
