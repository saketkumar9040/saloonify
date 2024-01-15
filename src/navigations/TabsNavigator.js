import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5,Octicons } from "@expo/vector-icons";

import HomeScreen from "../screens/homeScreen";
import ProfileScreen from "../screens/profile";
import ServicesScreen from "../screens/servicesScreen";

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#4c4c4c",
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 7,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 5,
        },
        tabBarActiveTintColor: "#00FF7F",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="home"
              size={24}
              color={focused ? "#00FF7F" : "#fff"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome name="scissors" size={24}
            color={focused ? "#00FF7F" : "#fff"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={24}
              color={focused ? "#00FF7F" : "#fff"}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;