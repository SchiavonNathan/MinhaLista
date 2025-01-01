import React from "react";
import { Text, View } from "react-native";
import Header from "../../components/Header";
import { style } from "./styles";

export default function Home() {
    return(
        <View style = {style.container}>
            <View style = {style.boxTop}>
                <Text>Ola, Nathan</Text>
            </View>
        </View>
    )
}