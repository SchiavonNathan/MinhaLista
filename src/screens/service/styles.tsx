import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        paddingTop:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#FFF"
    },
    boxTop:{
        height:115,
        width:"100%",
        paddingHorizontal: 15,
        backgroundColor:"#e5e619",
    },
    text:{
        fontWeight: "bold",
        marginTop:15,
        fontSize:25
    },
    textTittle:{
        width:"100%",
        marginTop:10,
        fontSize:18,
        paddingHorizontal: 18,
        fontWeight: "bold"
    },
    itemFlatlist:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: 90,
        height:90,
        borderRadius: 15,
    },
    boxMid:{
        width:"100%",
        height:600,
        alignItems:"center"
    },
    input:{
        height: "100%",
        width: "90%",
        borderRadius:40,
        paddingLeft:5
    },
    boxInput:{
        width:"100%",
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 7,
        backgroundColor: "white",
        borderColor: themas.colors.lightGray
    },
    boxService: {
        backgroundColor: "#e5e619",
        height: 240,
        width: "85%",
        marginTop: 20,
        borderRadius: 15,
        justifyContent: "flex-start",
        borderWidth:1,
        borderColor:"#f0e68c",
    },
    logo: {
        width: "100%",
        height: "80%",
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    serviceText:{
        fontSize:17,
        fontWeight:"bold",
        paddingTop:10,
        paddingHorizontal:15
    }
})