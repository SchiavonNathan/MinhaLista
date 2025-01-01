import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert
} from 'react-native';
import { themas } from "../../global/themes";
import {MaterialIcons} from "@expo/vector-icons"
import {style} from "./styles"
import DaUmHelpLogo from "../../assets/DaUmHelpLogo.png"
import axios from 'axios'
import { useNavigation, NavigationProp } from '@react-navigation/native'



export default function Login (){

    const navigation = useNavigation<NavigationProp<any>>()

    const apiUrl = "http://10.0.2.2:3000"
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        const user = {email, password}

        try {
            const response = await axios.post(`${apiUrl}/user/login`,user)
            console.log(response.data);
            navigation.navigate("BottomRoutes")
    
          } catch (err) {
            console.error("Erro ao fazer login:", err)
            Alert.alert("Erro ao fazer login!")
          }
    }

    const cadastroNavigation = async () => {
        navigation.navigate("Cadastro")
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


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
                
                <SafeAreaView>
                <View style = {style.boxInput}>
                    <TextInput
                        secureTextEntry={!showPassword}
                        style = {style.input}
                        onChangeText={newPassword => setPassword(newPassword)}
                    />
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}
                        onPress={toggleShowPassword}
                    />
                </View>
                </SafeAreaView>
            </View>

            <View style = {style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={handleLogin}>
                    <Text style={style.textButton}>Entrar</Text>    
                </TouchableOpacity> 
            </View>

            <Text style={style.textBottom}>Não tem conta? 
                    <Text onPress={cadastroNavigation} style={{color: themas.colors.blackYellow}}>
                        Crie agora!
                    </Text>
            </Text>

        </View>
    )
}