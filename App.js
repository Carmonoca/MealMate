import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./src/routes/stack.routes";
// Routes
import Login from "./src/pages/Login";
import AuthContext from "./src/context/authContext";
import { navigationRef } from "./src/routes/RootNavigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthContext>
        <StackRoutes />
      </AuthContext>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
