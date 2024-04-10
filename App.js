import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TxtInputComponent from "./src/components/TxtInputComponent";
import ButtonComponent from "./src/components/ButtonComponent";
import TxtComponent from "./src/components/TxtComponent";

export default function App() {
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");

  // aqui é a função onde vai ser feita a verificação se há algum número no Input
  const verificadorGrau = () => {
    if (celsius === "") {
      alert("Coloque uma Temperatura válida.");
    }
    //caso tenha um numero no input, ele vai fazer a conta e definir o valor na const Resultado
    else {
      setResultado(parseFloat(celsius) * 1.8 + 32);
    }
  };

  // essa é a funcão que vai ser chamada para zerar os numeros da conta
  const zerar = () => {
    setCelsius("");
    setResultado("");
  };

  return (
    <View style={styles.container}>
      <TxtComponent
        txt="Conversor de Celsius para Fahrenheit"
        style={styles.title}
      />
      <TxtInputComponent
        placeholder="Temperatura em Celsius"
        style={styles.input}
        onchange={setCelsius}
        valor={celsius}
      />
      <ButtonComponent txt="Zerar Valor" funcao={zerar} style={styles.zerar} />
      <TxtComponent
        style={styles.txt}
        celsius={celsius}
        txt="ºC Celsius em Fahrenheit é igual a:"
      />
      <TxtComponent resultado={resultado} txt="°F" style={styles.result} />
      <ButtonComponent
        funcao={verificadorGrau}
        style={styles.button}
        txt="Calcular"
        styletxt={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  txt: {
    fontSize: 20,
  },
  zerar: {
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  txtZerar: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
