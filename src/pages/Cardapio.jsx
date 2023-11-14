import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Mamao from "../../assets/mamao.png";
import Granola from "../../assets/granola.png";
import Brownie from "../../assets/brownie.png";
import Cookie from "../../assets/cookie.png";
import Cesar from "../../assets/cesar.png";
import Macarrao from "../../assets/macarrao.png";
import File from "../../assets/file.png";
import Chips from "../../assets/chips.png";


export default function Cardapio() {
  return (
    <SafeAreaView style={styles.containerLogin}>
      <Text style={styles.title}>Cardápio</Text>

      <View style={styles.containerDays}>
        <Text style={styles.TextDay}>Dia</Text>
        <Text style={styles.TextSem}>Semana</Text>
      </View>
      {/*  */}
      <View style={styles.container}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <View style={styles.containerDaysCircle}>
          <View style={styles.circleBlue}>
            <Text style={styles.circleBlueText}>18</Text>
          </View>
          <View style={styles.circleWhite}>
            <Text style={styles.circleWhiteText}>19</Text>
          </View>
          <View style={styles.circleWhite}>
            <Text style={styles.circleWhiteText}>20</Text>
          </View>
          <View style={styles.circleWhite}>
            <Text style={styles.circleWhiteText}>21</Text>
          </View>
          <View style={styles.circleWhite}>
            <Text style={styles.circleWhiteText}>22</Text>
          </View>
        </View>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </View>
      {/*  */}
      <ScrollView style={styles.containerData}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MaterialIcons name="timer" size={24} color="black" />
          <Text style={styles.subtitle}>Café da manhã</Text>
        </View>
        {/*  */}
        <View style={{ backgroundColor: "#fff", marginVertical:10}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image source={Mamao} style={{ width: 40, height: 40, borderRadius:10 }} />
            <Text>Mamão</Text>
            <FontAwesome name="list" size={20} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image source={Granola} style={{ width: 40, height: 40 }} />
            <Text>Granola com Mel</Text>
            <FontAwesome name="list" size={20} color="black" />
          </View>
        </View>
        {/*  */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MaterialIcons name="timer" size={24} color="black" />
          <Text style={styles.subtitle}>Almoço</Text>
        </View>
        <View style={{ backgroundColor: "#fff", marginVertical:10}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image source={Cesar} style={{ width: 40, height: 40 }} />
            <Text>Salada Caesar</Text>
            <FontAwesome name="list" size={20} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image source={Macarrao} style={{ width: 40, height: 40, borderRadius:10 }} />
            <Text>Macarrão de Abobrinha</Text>
            <FontAwesome name="list" size={20} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image source={File} style={{ width: 40, height: 40, borderRadius:10  }} />
            <Text>Filé de frango</Text>
            <FontAwesome name="list" size={20} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image source={Chips} style={{ width: 40, height: 40, borderRadius:10 }} />
            <Text>Chips de batata doce</Text>
            <FontAwesome name="list" size={20} color="black" />
          </View>
        </View>
            {/*  */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MaterialIcons name="timer" size={24} color="black" />
          <Text style={styles.subtitle}>Lanche da tarde</Text>
        </View>
        <View style={{ backgroundColor: "#fff", marginVertical:10}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image source={Brownie} style={{ width: 40, height: 40 }} />
            <Text>Brownie de Chocolate</Text>
            <FontAwesome name="list" size={20} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image source={Cookie} style={{ width: 40, height: 40, borderRadius:10 }} />
            <Text>Cookies</Text>
            <FontAwesome name="list" size={20} color="black" />
          </View>
        </View>
        {/*  */}
        
        {/*  */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    paddingVertical: 20,
    flex: 1,
    backgroundColor: "#F2FFE2",
  },
  containerDays: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  TextDay: {
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
    backgroundColor: "#004AAD",
    width: 130,
    textAlign: "center",
    borderRadius: 15,
  },
  TextSem: {
    fontSize: 22,
    fontWeight: "500",
    color: "#004AAD",
    borderColor: "#004AAD",
    borderWidth: 1.5,
    width: 130,
    textAlign: "center",
    borderRadius: 15,
  },
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  containerDaysCircle: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  circleBlue: {
    backgroundColor: "#004AAD",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  circleBlueText: {
    color: "#fff",
    fontSize: 16,
  },
  circleWhite: {
    borderColor: "#004AAD",
    borderWidth: 1.5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  circleWhiteText: {
    fontSize: 16,
  },
  containerData: {
    height: "100%",
    padding: 20,
    backgroundColor: "#E7FFC9",
    marginTop: 20,
    gap: 10,
    zIndex: 999,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
  },
});
