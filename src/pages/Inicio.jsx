import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ImageCard from "../../assets/cardImage.png";
import Cupcake from "../../assets/cupcake.png";

export default function Inicio() {
  return (
    <View style={styles.containerInicio}>
      {/* Card inicial */}
      <View style={styles.containerCard}>
        <View style={styles.card}>
          <Image source={ImageCard} alt="Imagem" />
          <View style={styles.informationDay}>
            <Text style={styles.informationDayText}>Dia</Text>
          </View>
          <View style={styles.cardInformation}>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              vitae nihil fuga magni labore asperiores nam ut, quos
              reprehenderit enim earum cum incidunt aperiam et voluptas.
              Dolorum, enim necessitatibus?
            </Text>
          </View>
        </View>
      </View>

      {/* Quantidade de receitas */}
      <View style={styles.containerReceitas}>
        <View style={styles.headerReceitas}>
          <Image source={Cupcake}  alt="Cupcake"/>
          <Text style={styles.headerReceitasText}>+650 receitas</Text>
        </View>
        <View style={styles.recomendationContainer}>
        <Text>Escolhas para você</Text>
        <View style={styles.imageContainer}>
          <Image source={ImageCard} alt="Imagem" style={styles.receitasImage}/>
          <Image source={ImageCard} alt="Imagem" style={styles.receitasImage}/>
        </View>
        </View>
        <Text></Text>
      </View>

      {/* Cardapio */}

      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInicio: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2FFE2",
    paddingTop: 70,
    padding: 20,
  },

  containerCard: {
    width: "100%",
    height: 160,
    marginBottom: 140
  },
  card: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    position: "relative",
  },
  informationDay: {
    width: 50,
    backgroundColor: "#004AAD",
    borderRadius: 18,
    position: "relative",
    right: 110,
    bottom: 38,
    zIndex: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  informationDayText: {
    color: "#fff",
    fontSize: 12,
  },
  cardInformation: {
    width: "90%",
    height: 120,
    padding: 8,
    textAlign: "justify",
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: "relative",
    bottom: 48,
  },
  containerReceitas:{
    backgroundColor:"#fff",
    padding: 20,
    borderRadius: 15,
    gap: 20
  },
  imageContainer:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row",
    gap: 50
  },
  receitasImage:{
    width: 140,
    height: 140
  },
  recomendationContainer: {
    flexDirection:"column",
    gap: 10
  },
  headerReceitas:{
    flexDirection:"row",
    gap: 10,
    alignItems: "center"
  },
  headerReceitasText:{
    fontSize: 16,
    fontWeight: "700"
  }
});
