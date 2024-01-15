import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigator from "./TabsNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="main"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigator