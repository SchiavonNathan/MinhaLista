import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { style } from "./styles";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios'
import * as SecureStore from 'expo-secure-store';
import Encanador from '../../assets/encanador.png'
import Pedreiro from '../../assets/pedreiro.png'

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
                <View style = {style.boxInput}>
                <Ionicons name="search-outline" size={25} color="gray" />
                    <TextInput
                        style = {style.input}
                    />
                </View>
            </View>
            <Text style={style.textTittle}>
                Explore Categorias
            </Text>
            <FlatList
                horizontal={true}
                style={{paddingVertical: 5}}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap:15, paddingHorizontal:12 }}
                data={services}
                keyExtractor={(item, idx) => `${item.name}-${idx}`}
                renderItem={({ item }) => (
                    <TouchableOpacity style={style.itemFlatlist}>
                        <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={30} color="black" />
                        <Text >{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={style.boxMid}>
                <Text style={style.textTittle}>Recomendado</Text>
                <View style={style.boxService}>
                    <Image 
                        source={Encanador}
                        style={style.logo}
                    />
                    <Text style={style.serviceText}>Encanador</Text>
                </View>
                <View style={style.boxService}>
                    <Image 
                        source={Pedreiro}
                        style={style.logo}
                    />
                    <Text style={style.serviceText}>Pedreiro</Text>
                </View>
            </View>
            
        </View>
        </ScrollView>
    )
}