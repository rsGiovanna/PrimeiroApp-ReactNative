import React from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from "react-native";

const colorGithub = "#010409";
const colorFontGithub = "#C9D1D9";
const colorDarkFontGithub = "#4F565E";
const imageProfileGithub =
  "https://avatars.githubusercontent.com/u/81055133?v=4";
const urlToMyGithub = "https://github.com/rsGiovanna";

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log("Verificando Link");
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log("Link Aprovado");
      console.log("Abrindo link...");
      await Linking.openURL(urlToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={"colorGithub"} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Giovanna sentada a beira de uma cachoeira"
          style={style.avatar}
          source={{ uri: imageProfileGithub }}
        />
        <Text
          accessibilityLabel="Nome: Giovanna Rodrigues"
          style={[style.defaultText, style.name]}
        >
          Giovanna Rodrigues
        </Text>
        <Text
          accessibilityLabel="Nickname: rsGiovanna"
          style={[style.defaultText, style.nickName]}
        >
          rsGiovanna
        </Text>
        <Text
          accessibilityLabel="Descrição: Graduanda em Sistemas de Informação | HelpDesk | DEV | JS | @rs_gio"
          style={[style.defaultText, style.description]}
        >
          Graduanda em Sistemas de Informação | HelpDesk | DEV | JS | @rs_gio
        </Text>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Abrir no GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    //Column
    backgroundColor: "colorGithub",
    flex: 1, //Expandir para a tela inteira
    justifyContent: "center", //Alinhar o conteúdo na verticalmente
  },
  content: {
    alignItems: "center", //Alinhar o conteúdo na horizontalmente
    padding: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  defaultText: {
    color: "colorFontGithub",
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  nickName: {
    fontSize: 16,
    color: "colorDarkFontGithub",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 20,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
