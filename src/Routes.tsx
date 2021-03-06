import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "./pages/Home";
import FrequencyPage from "./pages/Frequency";

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Frequency" component={FrequencyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
