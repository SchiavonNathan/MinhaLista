import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";
import {MaterialIcons} from "@expo/vector-icons"

export const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        height: 50,
        justifyContent: "space-around",
        backgroundColor:"rgba(128, 128, 128, 0.8)",
        
    },
    item:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})