import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../pages/Home";
import { Welcome } from "../pages/Welcome";

const Stack = createNativeStackNavigator()

export function AppRoutes(){

    return <Stack.Navigator>
        <Stack.Screen name ='Welcome' component={Welcome}/>
        <Stack.Screen name ='Home' component={Home}/>
    </Stack.Navigator>
}