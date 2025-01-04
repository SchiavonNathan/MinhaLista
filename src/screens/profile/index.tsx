import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity} from "react-native";
import { style } from "./styles";
import UserLogo from "../../assets/genericusericon.png"
import { themas } from "../../global/themes";
import {MaterialIcons} from "@expo/vector-icons"
import Header from "../../components/Header";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";

export default function Profile() {

    interface User {
        email: string;
        id: string;
        isFreelancer: boolean;
        name: string;
        password: string;
    }

    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const fetchTokenAndUser = async () => {
          try {
            const retrievedToken = await SecureStore.getItemAsync('token');
            setToken(retrievedToken)
            console.log("Token recuperado:", retrievedToken);
    
            if (retrievedToken) {
              const response = await axios.get(`http://10.0.2.2:3000/user/find/${retrievedToken}`);
              setUser(response.data);
              console.log("Dados do usuário:", response.data);
            }
          } catch (error) {
            console.error("Erro:", error);
          }
        };
        
        fetchTokenAndUser();
      }, []);

    return(
        <ScrollView>
        <Header name="BottomRoutes"></Header>
        <View style = {style.container}>
            <Image 
                source={UserLogo}
                style = {style.logo}
                resizeMode="contain"
            />
            <Text style = {style.name}>Nathan Schiavon</Text>
            <Text style = {style.tittle}>User</Text>
            <View style = {style.boxTop}>
                <Text>Nome</Text>
                <View style = {style.textBox}>
                    <MaterialIcons
                            name="people"
                            size={20}
                            color={themas.colors.gray}
                            paddingRight={6}
                    />
                    <Text>{user?.name}</Text>
                </View>
            </View>
            <View style = {style.boxTop}>
                <Text>Seu Email</Text>
                <View style = {style.textBox}>
                    <MaterialIcons
                            name="email"
                            size={20}
                            color={themas.colors.gray}
                            paddingRight={6}
                    />
                    <Text>{user?.email}</Text>
                </View>
            </View>
            <View style = {style.boxTop}>
                <Text>Telefone</Text>
                <View style = {style.textBox}>
                    <MaterialIcons
                            name="phone"
                            size={20}
                            color={themas.colors.gray}
                            paddingRight={6}
                    />
                    <Text></Text>
                </View>
            </View>
            <View style = {style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Editar Perfil</Text>    
                </TouchableOpacity> 
            </View>
        </View>
    </ScrollView>

    )
}