import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import BottomRoutes from "./bottom.routes";
import Cadastro from "../screens/signin";
import Profile from "../screens/profile";

export default function Routes(){
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator 
            initialRouteName="Login" 
            screenOptions={
            {
                headerShown:false,
                cardStyle:{
                    backgroundColor:"#FFF"
                }
            }
        }>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />

        </Stack.Navigator>
    )
}