import React from "react";
import { View } from "react-native";
import { style } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return(
        <View style = {style.container}>
             <Ionicons name="arrow-back-outline" size={25} color="gray" />
        </View>
    )
}