import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Routes
import Login from "../pages/Login";
import TabRoutes from "./tab.route";
import Cadastro from "../pages/Cadastro";
import Cadastro2 from "../pages/Cadastro2";
import { useContext } from "react";
import { Context } from "../context/authContext";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  const { signed } = useContext(Context)
  console.log(signed)
  return (
    <Stack.Navigator>
      {signed ? (
        <Stack.Screen name="TabRoutes" component={TabRoutes} options={{
          headerShown: false
        }} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Cadastro2" component={Cadastro2} options={{
            headerShown: false
          }} />
        </>
      ) }
    </Stack.Navigator>
  );
}