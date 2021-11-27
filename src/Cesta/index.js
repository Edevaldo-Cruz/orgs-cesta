import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Topo from "./component/Topo";
import Detalhe from "./component/Detalhe";
import Item from "./component/Item";
import Texto from "../component/texto";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        style={styles.lista}
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={styles.cesta}>
                <Detalhe {...detalhes} />
                <Texto style={styles.titulo}> {itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  lista: {
    paddingHorizontal: 16,
  },
});
