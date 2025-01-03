import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        paddingTop:30,
        alignItems:"center",
        justifyContent:"center"
    },
    boxTop:{
        height:70,
        width:"100%",
        paddingHorizontal: 15
    },
    text:{
        fontWeight: "bold",
        marginTop:10,
        fontSize:30
    },
    itemFlatlist:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: 100,
        height:100,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "gray",
    },
    boxMid:{
        backgroundColor:"#e0e0e0",
        width:"100%",
        height:600
    }
})