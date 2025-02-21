import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';

export default ({state,navigation}) => {
    
    const navigateScreen =(screenName:string) => {
        navigation.navigate(screenName)
    }

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.item} onPress={() => navigateScreen("Home")}>
                <AntDesign name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={style.item} onPress={() => navigateScreen("Service")}>
                <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={style.item} onPress={() => navigateScreen("Configuration")}>
                <AntDesign name="user" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}