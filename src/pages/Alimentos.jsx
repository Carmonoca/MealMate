import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

const alimentos = [
  {
    firstText:
      "O mamão é uma fruta originária da América do Sul, típica das regiões tropicais e subtropicais12. Papaia, formosa e mamão-de-corda são tipos de mamão presentes no Brasil1. ",
    secondText:
      "É rico em vitaminas, minerais e em fibras, sendo um importante aliado no funcionamento adequado do intestino13.",
      thirdText:" O mamão é uma fruta extremamente nutritiva, com mais de 80% de água em sua composição, e é capaz de proporcionar benefícios para o corpo inteiro",
  },
];

export default function Alimentos() {
  return (
    <SafeAreaView style={styles.containerLogin}>
      <ScrollView style={{height:"auto"}}>
        <Text style={styles.title}>Alimentos</Text>

        <View style={styles.containerSubtitle}>
          <Text style={styles.subtitle}>Mamão</Text>

          <View style={styles.containerText}>
            <Entypo name="light-bulb" size={24} color="black" />
            <Text style={styles.text}>Atividades fáceis</Text>
          </View>
        </View>

        <FlatList
          data={alimentos}
          renderItem={({ item }) => (
            <View style={styles.containerList}>
              <Text style={styles.listText}>{item.firstText}</Text>
              <Image
                source={require("../../assets/mamao.png")}
                alt="Imagem"
                style={styles.receitasImage}
              />
              <Text style={styles.listText}>{item.secondText}</Text>
              <Image
                source={require("../../assets/mamao2.png")}
                alt="Imagem"
                style={styles.receitasImage}
              />
              <Text style={styles.listText}>{item.thirdText}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F2FFE2",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  containerSubtitle: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "600",
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 5,
  },
  listText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "justify",
  },
  containerList: {
    gap: 12,
  },
  receitasImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});
