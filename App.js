import React, { useState } from "react";
import { View } from "react-native";
import TxtInputComponent from "./src/components/TxtInputComponent";
import ButtonComponent from "./src/components/ButtonComponent";
import TxtComponent from "./src/components/TxtComponent";
import { styles } from "./src/style/style";
import ModalComponent from "./src/components/ModalComponent";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");
  const [imagem, setImagem] = useState("");
  const [mensagem, setMensagem] = useState("");
  const ImgCongelado = {
    uri: "https://media.istockphoto.com/id/638381826/pt/foto/frozen-man-holding-a-thermometer-while-it-is-snowing.jpg?s=612x612&w=0&k=20&c=ysH_gPJvkDDsUQWFndISaoFoeAOp3K2u5f-PZ7GyB28=",
  };
  const ImgFrio = {
    uri: "https://vocenaneve.com.br/wp-content/uploads/2021/09/canal-rideau.jpg",
  };
  const ImgNormal = {
    uri: "https://imagens.ebc.com.br/IuVjtnP8pUW78otcumemhMyfV7w=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/17_07_2020_covid_ibirapuera-3.jpg?itok=fGQyjbru",
  };
  const ImgCalor = {
    uri: "https://www.blog.vaidevoala.com.br/wp-content/uploads/2019/04/12-8-melhores-praias-do-Brasil-para-voce%CC%82-conhecer.png",
  };
  const ImgDerretendo = {
    uri: "https://img.freepik.com/fotos-premium/clima-quente-verao-calor-intenso-sol-brilhante-ondas-de-calor-aquecimento-global-sol-ardente-calor-perigoso-alta-temperatura-problema-do-periodo-moderno-pensamento-futuro_887181-1863.jpg",
  };
  const ImgInferno = {
    uri: "https://media.istockphoto.com/id/1169495140/pt/foto/the-surface-of-the-lava-background.jpg?s=612x612&w=0&k=20&c=pyrb8l3eHoYJ5xhLILG93k5X8c1JqLpfdeyJAFpaiT8=",
  };
  const ImgMundoCongelado = {
    uri: "https://istoedinheiro.com.br/wp-content/uploads/sites/17/2021/03/terra-e1615599020164.jpg",
  };
  const ImgYakutski = {
    uri: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TMTQ7FYM6RIMRHB7TEIXYVJKJU.jpg",
  };

  // aqui é a função onde vai ser feita a verificação se há algum número no Input
  const verificadorGrau = () => {
    if (celsius === "") {
      alert("Coloque uma Temperatura válida.");
    }
    //caso tenha um numero no input, ele vai fazer a conta e definir o valor na const Resultado
    else {
      setResultado(parseFloat(celsius) * 1.8 + 32);
      Img();
      setVisible(true);
    }
  };

  // essa é a funcão que vai ser chamada para zerar os numeros da conta
  const zerar = () => {
    setCelsius("");
    setResultado("");
    setVisible(false);
  };

  // aqui chamando as imagens e mensagens dependendo do valor de Celsius
  const Img = () => {
    if (celsius <= -276) {
      setImagem(ImgMundoCongelado);
      setMensagem("O Mundo congelou");
    } else if (celsius >= -275 && celsius <= -15) {
      setImagem(ImgYakutski);
      setMensagem("Bem vindo a Yakutsk, a cidade mais gelada da Terra");
    } else if (celsius >= -16 && celsius <= 5) {
      setImagem(ImgFrio);
      setMensagem("Friozinho da Europa em pae, tempinho de ir patinar no gelo");
    } else if (celsius >= 6 && celsius <= 20) {
      setImagem(ImgNormal);
      setMensagem("Famoso 'frio' no Brasil");
    } else if (celsius >= 21 && celsius <= 35) {
      setImagem(ImgCalor);
      setMensagem("o tal do 'Praio bb', partiu Ubatuba!!");
    } else if (celsius >= 36 && celsius <= 45) {
      setImagem(ImgDerretendo);
      setMensagem(
        "Sem condições de sair debaixo do ar condicionado, se sair não aguenta!"
      );
    } else {
      setImagem(ImgInferno);
      setMensagem("Seja bem vindo ao ...");
    }
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
      <ButtonComponent
        funcao={verificadorGrau}
        style={styles.button}
        txt="Calcular"
        styletxt={styles.buttonText}
      />
      <ModalComponent
        visible={visible}
        setVisible={setVisible}
        zerar={zerar}
        mensagem={mensagem}
        imagem={imagem}
        celsius={celsius}
        resultado={resultado}
      />
    </View>
  );
}
