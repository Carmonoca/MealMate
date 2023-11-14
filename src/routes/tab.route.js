import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// importação das páginas

import Inicio from "../pages/Inicio";
import Alimentos from "../pages/Alimentos";
import Receitas from "../pages/Receitas";
import Cardapio from "../pages/Cardapio";

// Icones

import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign
} from "@expo/vector-icons";
import Perfil from "../pages/Perfil";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F2FFE2",
        },
        tabBarActiveTintColor: "#004AAD",
        tabBarInactiveTintColor: "#000",
      }}

      initialRouteName="Inicio"
    >
     
      <Tab.Screen
        name="Alimentos"
        component={Alimentos}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="fruit-watermelon"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Receitas"
        component={Receitas}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="menu-book" size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Cardapio"
        component={Cardapio}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="restaurant-menu" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
