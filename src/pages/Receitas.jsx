import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from "@expo/vector-icons";
import Cookie from "../../assets/cookie.png";
import Pudim from "../../assets/pudim.png";
import Macarrao from "../../assets/macarrao.png";
import Bolo from "../../assets/bolo.png";
import Torta from "../../assets/torta.png";
import Sorvete from "../../assets/sorvete.png";
import Salada from "../../assets/salad.png";
import Guacamole from "../../assets/Guacamole.png";

export default function Receitas() {
  return (
    <SafeAreaView style={styles.containerLogin}>
      <Text style={styles.title}>Receitas</Text>

      <ScrollView style={styles.containerPrincipal}>
        {/*  */}
        <View style={{ marginBottom: 20 }}>
          <View style={styles.containerReceita}>
            <View style={styles.container}>
              <Image source={Cookie} style={styles.imageReceita} />
              <View style={styles.containerText}>
                <Text>Cookie de Broniew</Text>
                <AntDesign name="hearto" size={20} color="#004AAD" />
              </View>
            </View>

            <View style={styles.container}>
              <Image source={Pudim} style={styles.imageReceita} />
              <View style={styles.containerText}>
                <Text>Pudim de chá</Text>
                <AntDesign name="hearto" size={20} color="#004AAD" />
              </View>
            </View>
          </View>
        </View>
        {/*  */}
        <View style={{ marginBottom: 20 }}>
          <View style={styles.containerReceita}>
            <View style={styles.container}>
              <Image source={Macarrao} style={styles.imageReceita} />
              <View style={styles.containerText}>
                <Text style={{ width: 120 }}>Macarrão de abobrinha</Text>
                <AntDesign name="hearto" size={20} color="#004AAD" />
              </View>
            </View>

            <View style={styles.container}>
              <Image source={Bolo} style={styles.imageReceita} />
              <View style={styles.containerText}>
                <Text style={{ width: 120 }}>Bolo de banana</Text>
                <AntDesign name="hearto" size={20} color="#004AAD" />
              </View>
            </View>
          </View>
        </View>
        {/*  */}
        <View style={{ marginBottom: 20 }}>
          <View style={styles.containerReceita}>
            <View style={styles.container}>
              <Image source={Torta} style={styles.imageReceita} />
              <View style={styles.containerText}>
                <Text>Torta de frango</Text>
                <AntDesign name="hearto" size={20} color="#004AAD" />
              </View>
            </View>

            <View style={styles.container}>
              <Image source={Sorvete} style={styles.imageReceita} />
              <View style={styles.containerText}>
                <Text style={{ width: 120 }}>Sorvete de morango</Text>
                <AntDesign name="hearto" size={20} color="#004AAD" />
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <View style={styles.containerReceita}>
            <View style={styles.container}>
              <Image source={Salada} style={styles.imageReceita} />
              <View style={styles.containerText}>
                <Text style={{ width: 120 }}>Salada de fruta</Text>
                <AntDesign name="hearto" size={20} color="#004AAD" />
              </View>
            </View>

            <View style={styles.container}>
              <Image source={Guacamole} style={styles.imageReceita} />
              <View style={styles.containerText}>
                <Text style={{ width: 120 }}>Guacamole</Text>
                <AntDesign name="hearto" size={20} color="#004AAD" />
              </View>
            </View>
          </View>
        </View>
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
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
    gap: 24,
  },
  containerReceita: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  container: {
    gap: 5,
  },
  imageReceita: {
    width: 150,
    height: 150,
  },
});
