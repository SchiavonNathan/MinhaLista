import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";
import {MaterialIcons} from "@expo/vector-icons"

export const style = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        paddingBottom: 60
    },
    logo:{
        width:130,
        height:200,
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
    boxTop:{
        paddingTop: 20,
        width:"100%",
        paddingHorizontal:25
    },
    textBox:{
        width:"100%",
        height:45,
        borderWidth:5,
        borderRadius:10,
        marginTop:5,
        paddingHorizontal: 5,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray,
        flexDirection: "row",
        alignItems: "center",
    },
    button:{
        width: 230,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themas.colors.gray,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    textButton:{
        fontSize:16,
        color:"#FFF",
        fontWeight:"bold"
    },
})