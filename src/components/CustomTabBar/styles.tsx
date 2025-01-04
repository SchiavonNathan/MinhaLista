import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";
import {MaterialIcons} from "@expo/vector-icons"

export const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        height: 50,
        justifyContent: "space-around",
        backgroundColor:"black",
        
    },
    item:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})