import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circleBlue}></View>
      <View style={styles.circleGreen}></View>
      <View>
        <Text style={styles.textLogin}>
          <Text style={styles.textLoginWhite}>Cad</Text>astro
        </Text>
        <Text style={styles.textSubLogin}>
          <Text style={styles.textSubLoginWhite}>Já possui u</Text>ma conta?{" "}
          <TouchableOpacity
            onPress={() => {
              navigate.navigate("Login");
            }}
          >
            <Text style={styles.textBackLogin}>Faça Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.containerLogin}>
        <View style={styles.containerInput}>
          <Text>Nome</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <Text>E-mail</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <Text>Data de nascimento</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <Text>Senha</Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity
          style={styles.buttonEntrar}
          onPress={() => {
            navigate.navigate("Cadastro2");
          }}
        >
          <Text style={styles.textButton}>Próximo</Text>
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
  textBackLogin: {
    fontSize: 20,
    fontWeight: "400",
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: 350,
    paddingVertical: 30,
    borderRadius: 20,
    marginTop: 20,
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
