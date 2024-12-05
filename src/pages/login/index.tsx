import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { themas } from "../../global/themes";
import {style} from "./styles"
import {MaterialIcons} from "@expo/vector-icons"

import Logo from "../../assets/logo.png"
import DaUmHelpLogo from "../../assets/DaUmHelpLogo.png"

export default function login (){
    return(
        <View style = {style.container}>
            <View style = {style.boxTop}>
                <Image 
                    source={DaUmHelpLogo}
                    style = {style.logo}
                    resizeMode="contain"
                />
                <Text style = {style.text}>Bem vindo!</Text>
            </View>

            <View style = {style.boxMid}>
                <Text style = {style.titleInput}>Email</Text>
                <View style = {style.boxInput}>
                    <TextInput
                        style = {style.input}
                    />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                <Text style = {style.titleInput}>Senha</Text>
                <View style = {style.boxInput}>
                    <TextInput
                        style = {style.input}
                    />
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>

            <View style = {style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>    
                </TouchableOpacity> 
            </View>

            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>

        </View>
    )
}