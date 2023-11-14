import { View, Text } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import api from "../service/api";
import Login from "../pages/Login";
import * as RootNavigation from '../routes/RootNavigation';
import { createNavigationContainerRef, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const Context = createContext({});

const navigationRef = createNavigationContainerRef()

export default function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("user")

      if (storagedUser) {
        setSigned(true)
        setLoading(false)
      }
    }

    loadStorageData()
  }, [])

  async function signIn({ email, password}) {

    let user = {
      email: email,
      senha: password
    }


    try {
      const response = await api.post("/login", user)
      setUser(response.data)
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user))
      setSigned(true)
      RootNavigation.navigate("TabRoutes")
    } catch (error) { 
      setSigned(false)
      return error
    }
  }

  async function signOut() {
    await AsyncStorage.clear()
    setUser(null)
    setSigned(false)
  }

  // signIn({email: "teste3@teste.com", password: "senha123" })
  return <Context.Provider value={{ signed, signIn, user, signOut }}>
    { signed ? children : <Login />}
    </Context.Provider>;
}
