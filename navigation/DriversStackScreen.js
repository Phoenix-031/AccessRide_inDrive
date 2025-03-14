import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Drivers from "../screeens/Drivers";
import DriverDetailsStackScreen from "./DriverDetailsStackScreen";

const DriversStack = createNativeStackNavigator();

export default function DriversStackScreen() {
  return (
    <DriversStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#b7ed55",
        },
        headerTintColor: "#000000",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerShadowVisible: false,
      }}
    >
      <DriversStack.Screen
        name="Drivers"
        component={Drivers}
        options={{ title: "Available drivers"}}
      />
      <DriversStack.Screen
        name="DriverDetailsScreen"
        component={DriverDetailsStackScreen}
        options={{ title: "Driver Details", headerShown: false }}
      />
    </DriversStack.Navigator>
  );
}