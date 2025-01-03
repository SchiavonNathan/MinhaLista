import React from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native'

type GreetingProps = {
    name: string;
  };

export default function Header(props: GreetingProps) {

     const navigation = useNavigation<NavigationProp<any>>()

     const navigateScreen =(screenName:string) => {
        navigation.navigate(screenName)
    }

    return(
        <View style = {style.container}>
             <TouchableOpacity onPress={() => navigateScreen(props.name)}>
                <Ionicons name="arrow-back-outline" size={25} color="gray" />
             </TouchableOpacity>
        </View>
    )
}