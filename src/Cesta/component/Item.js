import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import Texto from "../../component/texto";

export default function Item({ item: { nome, imagem } }) {
  return (
    <View style={styles.item} key={nome}>
      <Image style={styles.imagem} source={imagem} />
      <Texto style={styles.nome}>{nome}</Texto>
    </View>
  );

  {
    /* {lista.map(({ nome, imagem }) => {
        return (
          <View style={styles.item} key={nome}>
            <Image style={styles.imagem} source={imagem} />
            <Texto style={styles.nome}>{nome}</Texto>
          </View>
        );
      })} */
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#CECECE",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
