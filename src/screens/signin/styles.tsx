import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    boxTop:{
        height:170,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    boxMid:{
        height:180,
        width:"100%",
        paddingHorizontal: 37,
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:"100%",
        alignItems:"center",
        paddingTop:100
    },
    logo:{
        width:200,
        height:170
    },
    text:{
        fontWeight:"bold",
        marginTop:10,
        fontSize:18
    },
    titleInput:{
        marginLeft: 5,
        marginTop: 15,
        color: themas.colors.gray
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
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray
    },
    input:{
        height: "100%",
        width: "90%",
        borderRadius:40,
        paddingLeft:5
    },
    button:{
        width: 230,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themas.colors.primary,
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
    textBottom:{
        fontSize:16,
        color: themas.colors.gray
    },
    boxSwitch:{
        height:Dimensions.get('window').height/9,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
    }
})