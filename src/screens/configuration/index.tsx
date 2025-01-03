import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity} from "react-native";
import { style } from "./styles";
import UserLogo from "../../assets/genericusericon.png"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store';


export default function Configuration() {

    const navigation = useNavigation<NavigationProp<any>>()

    const navigateScreen =(screenName:string) => {
        navigation.navigate(screenName)
    }

    
    const logout = async () => {
        await SecureStore.deleteItemAsync('token');
        console.log("Token excluído!");
        navigateScreen("Login")
    };


    return(
        <ScrollView>
        <View style = {style.container}>
            <View style = {style.boxTop}>
                            <Text style = {style.text}>Perfil</Text>
            </View>
            <View style={style.boxPerfil}>
                <Image 
                    source={UserLogo}
                    style = {style.logo}
                    resizeMode="contain"
                />
                <View style={{paddingLeft:15}}>
                    <Text style = {style.name}>Nathan Schiavon</Text>
                    <Text style = {style.tittle}>Developer</Text>
                </View>
            </View>
            <View style={style.boxMid}>
                <TouchableOpacity style={style.buttom} onPress={() => navigateScreen("Profile")}>
                    <Ionicons name="key" size={30} color="black" />
                    <Text style={style.textButton}>Dados Pessoais</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttom}>
                    <Ionicons name="shield-checkmark-outline" size={30} color="black" />
                    <Text style={style.textButton}>Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttom} onPress={logout}>
                <Ionicons name="log-in-outline" size={30} color="black" />
                    <Text style={style.textButton}>Sair da conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>

    )
}