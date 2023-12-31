import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from "@react-navigation/native";
import DropdownComponent from "../components/Dropdown";

export default function Cadastro2() {
  const navigate = useNavigation();

  const data = [
    { label: 'Adulto', value: 'Adulto' },
    { label: 'Infantil', value: 'Infantil' },
    { label: 'Gestante/Lactante', value: 'Gestante/Lactante' },
    { label: 'Idoso', value: 'Idoso' },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circleBlue}></View>
      <View style={styles.circleGreen}></View>
      <View>
        <Text style={styles.textLogin}>
          <Text style={styles.textLoginWhite}>Monte</Text> seu plano
        </Text>
        <Text style={styles.textSubLogin}>
          <Text style={styles.textSubLoginWhite}>Escolha as op</Text>ções que
          mais se <Text style={styles.textSubLoginWhite}>encaixam co</Text>m
          você
        </Text>
      </View>
      <View style={styles.containerLogin}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={styles.arrowLeft}
          onPress={() => {
            navigate.goBack();
          }}
        />
        <View style={styles.containerInput}>
          <Text>Em qual das opções abaixo você mais se encaixa?</Text>
          <DropdownComponent data={data}/>
        </View>
        <View style={styles.containerInput}>
          <Text>Você possui restrições alimentares?</Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity style={styles.buttonEntrar}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#F2FFE2",
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    fontSize: 34,
    fontWeight: "500",
  },
  textSubLogin: {
    fontSize: 20,
    fontWeight: "400",
  },
  textLoginWhite: {
    fontSize: 34,
    fontWeight: "400",
    color: "#FFF",
  },
  textSubLoginWhite: {
    fontSize: 20,
    fontWeight: "400",
    color: "#FFF",
  },
  containerLogin: {
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FFF",
    width: 350,
    padding: 30,
    borderRadius: 20,
    marginTop: 20,
  },
  arrowLeft: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  containerInput: {
    width: 300,
    borderRadius: 20,
    marginBottom: 10,
    gap: 10,
  },
  input: {
    width: 300,
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonEntrar: {
    width: 300,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#004AAD",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },
  footer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    marginTop: 20,
  },
  textButtonFooter: {
    color: "#1E1E1E",
    opacity: 0.5,
    fontSize: 14,
    fontWeight: "400",
  },
  circleBlue: {
    width: 350,
    height: 350,
    borderRadius: 200,
    backgroundColor: "#004AAD",
    position: "absolute",
    top: 145,
    left: -163,
  },
  circleGreen: {
    width: 350,
    height: 350,
    borderRadius: 200,
    backgroundColor: "#8FBB56",
    position: "absolute",
    bottom: 65,
    right: -123,
  },
});
