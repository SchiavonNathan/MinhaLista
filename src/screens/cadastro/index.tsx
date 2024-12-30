import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { themas } from "../../global/themes";
import {style} from "./styles"
import {MaterialIcons} from "@expo/vector-icons"
import DaUmHelpLogo from "../../assets/DaUmHelpLogo.png"
import axios from 'axios'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { Switch } from "react-native-gesture-handler";


export default function Cadastro (){

    const navigation = useNavigation<NavigationProp<any>>()

    const apiUrl = "http://10.0.2.2:3000"
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFreelancer, setisFreelancer] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    
    const handleCadastro = async () => {

        const user = {name, email, password, isFreelancer}

        try {
            const response = await axios.post(`${apiUrl}/user`,user);
            console.log(response.data);
            navigation.navigate("Login")
    
          } catch (err) {
            console.error("Erro ao cadastrar o usuário:", err);
          }
    }

    const loginNavigation = async () => {
        navigation.navigate("Login")
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
                <Text style = {style.text}>Cadastro</Text>
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
                <View style = {style.boxSwitch}>
                <Text style = {style.titleInput}>Freelancer</Text>
                    <Switch
                        value={isFreelancer}
                        onValueChange={(value) => setisFreelancer(value)}
                    ></Switch>
                </View>
            </View>

            <View style = {style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={handleCadastro}>
                    <Text style={style.textButton}>Cadastrar</Text>    
                </TouchableOpacity> 
            </View>

            <Text style={style.textBottom}>Já possui conta?
                <Text onPress={loginNavigation} style={[style.textBottom, { color: themas.colors.blackYellow}]}>
                        Entre agora!
                </Text>
            </Text>
            
        </View>
    )
}