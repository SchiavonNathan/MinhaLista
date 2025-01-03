import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import { style } from "./styles";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios'
import * as SecureStore from 'expo-secure-store';

export default function Home() {

    interface User {
        email: string;
        id: string;
        isFreelancer: boolean;
        name: string;
        password: string;
    }
      

    const services = [
        {name: "Reparos",icon:"hammer-outline"},
        {name: "Saúde",icon:"heart-outline"},
        {name: "Beleza",icon:"cut-outline"},
        {name: "Assistencia",icon:"build-outline"},
        {name: "Estudos",icon:"school-outline"},
        {name: "Linguagens",icon:"language-outline"},
        {name: "Esportes",icon:"football-outline"},
        {name: "Automoveis",icon:"car-outline"},
        {name: "Gastronomia",icon:"restaurant-outline"},

    ]
    
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
       <View style = {style.container}>
            <View style = {style.boxTop}>
                <Text style = {style.text}>Olá, {user?.name}</Text>
            </View>
            <FlatList
                horizontal={true}
                style={{paddingVertical: 5}}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap:15, paddingHorizontal:12, paddingBottom:15 }}
                data={services}
                keyExtractor={(item, idx) => `${item.name}-${idx}`}
                renderItem={({ item }) => (
                    <TouchableOpacity style={style.itemFlatlist}>
                        <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={30} color="black" />
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={style.boxMid}>

            </View>
        </View>
        </ScrollView>
    )
}