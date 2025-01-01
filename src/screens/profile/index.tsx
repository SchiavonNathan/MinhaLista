import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity} from "react-native";
import { style } from "./styles";
import UserLogo from "../../assets/genericusericon.png"
import { themas } from "../../global/themes";
import {MaterialIcons} from "@expo/vector-icons"
import Header from "../../components/Header";

export default function Profile() {
    return(
        <ScrollView>
        <Header></Header>
        <View style = {style.container}>
            <Image 
                source={UserLogo}
                style = {style.logo}
                resizeMode="contain"
            />
            <Text style = {style.name}>Nathan Schiavon</Text>
            <Text style = {style.tittle}>Developer</Text>
            <View style = {style.boxTop}>
                <Text>Nome</Text>
                <View style = {style.textBox}>
                    <MaterialIcons
                            name="people"
                            size={20}
                            color={themas.colors.gray}
                            paddingRight={6}
                    />
                    <Text>Nathan</Text>
                </View>
            </View>
            <View style = {style.boxTop}>
                <Text>Sobrenome</Text>
                <View style = {style.textBox}>
                    <MaterialIcons
                            name="people"
                            size={20}
                            color={themas.colors.gray}
                            paddingRight={6}
                    />
                    <Text>Schiavon</Text>
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
                    <Text>Nathanmestrepk@gmail.com</Text>
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
                    <Text>(44) 99994-9414</Text>
                </View>
            </View>
            <View style = {style.boxTop}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>    
                </TouchableOpacity> 
            </View>
        </View>
    </ScrollView>

    )
}