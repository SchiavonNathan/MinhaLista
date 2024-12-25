import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
import { themas } from "../../global/themes";
import {style} from "./styles"
import {MaterialIcons} from "@expo/vector-icons"
import DaUmHelpLogo from "../../assets/DaUmHelpLogo.png"
import axios from 'axios'


export default function Cadastro (){

    const apiUrl = "http://localhost:3000"
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = async () => {
        const user = {email, password}

        const response = await axios.post(`${apiUrl}/user`,user)
        .then(res => {console.log(res.data)})
        .catch(err => {console.error(err)})
    }


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
                        onChangeText={newEmail => setEmail(newEmail)}
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
                        onChangeText={newPassword => setPassword(newPassword)}
                    />
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>

            <View style = {style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={handleLogin}>
                    <Text style={style.textButton}>Entrar</Text>    
                </TouchableOpacity> 
            </View>

            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>

        </View>
    )
}