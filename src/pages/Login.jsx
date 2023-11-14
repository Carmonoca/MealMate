import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AuthContext, { Context } from "../context/authContext";
import * as RootNavigation from "../routes/RootNavigation";

export default function Login() {
  const { signIn, signed } = useContext(Context);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigation();

  const resetUser = () => {
    setUser({
      email: "",
      password: "",
    });
  };
  const handdleLogin = async () => {
    if (user.email === "" || user.password === "") {
      alert("Preencha todos os campos");
    } else {
      await signIn({ email: user.email, password: user.password });
      resetUser();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circleBlue}></View>
      <View style={styles.circleGreen}></View>
      <View>
        <Text style={styles.textLogin}>Login</Text>
        <Text style={styles.textSubLogin}>Entre na sua conta</Text>
      </View>
      <View style={styles.containerLogin}>
        <View style={styles.containerInput}>
          <Text>E-mail</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={user.email}
            onChangeText={(e) => setUser({ ...user, email: e })}
          />
        </View>
        <View style={styles.containerInput}>
          <Text>Senha</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            value={user.password}
            onChangeText={(e) => setUser({ ...user, password: e })}
          />
        </View>
        <TouchableOpacity style={styles.buttonEntrar} onPress={handdleLogin}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              RootNavigation.navigate("Cadastro");
            }}
          >
            <Text style={styles.textButtonFooter}>
              Não possui conta?{" "}
              <Text style={styles.textButtonFooterBlue}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 30,
    fontWeight: "400",
  },
  containerLogin: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: 350,
    height: 450,
    borderRadius: 20,
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
    fontSize: 14,
    fontWeight: "400",
  },
  textButtonFooterBlue: {
    color: "#004AAD",
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
