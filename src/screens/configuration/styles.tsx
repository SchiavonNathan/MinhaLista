import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";
import {MaterialIcons} from "@expo/vector-icons"

export const style = StyleSheet.create({
    container:{
        paddingTop:20,
        alignItems:"center",
        justifyContent:"center",
        paddingBottom: 60
    },
    logo:{
        width:50,
        height:50,
    },
    name:{
        fontSize:23,
        paddingTop:0
    },
    tittle:{
        fontSize:17,
        paddingTop:0,
        color:"grey",
    },
    boxPerfil:{
        width: "100%",
        display:"flex",
        flexDirection:"row",
        padding:15,
        paddingBottom:25
    },
    boxTop:{
        height:70,
        width:"100%",
        paddingHorizontal: 15,
    },
    boxMid:{
        width:"90%",
        height:300,
        borderRadius:15,
        backgroundColor:"#e0e0e0",
        justifyContent:"center"
    },
    buttom:{
        padding:30,
        gap:15,
        width:"60%",
        display:"flex",
        flexDirection: "row"
    },
    text:{
        fontWeight: "bold",
        marginTop:10,
        fontSize:30
    },
    textButton:{
        fontSize:17
    }    
})