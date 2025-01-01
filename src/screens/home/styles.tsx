import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        padding:15,
        paddingTop:20,
        alignItems:"center",
        justifyContent:"center"
    },
    boxTop:{
        height:50,
        width:"100%",
        backgroundColor:"blue"
        
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:"100%",
        paddingHorizontal: 37
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:"100%",
        alignItems:"center",
        paddingTop:40
    },
    logo:{
        width:200,
        height:200
    },
    text:{
        fontWeight:"bold",
        marginTop:10,
        fontSize:18
    },
    titleInput:{
        marginLeft: 5,
        marginTop: 20,
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
    }
    
})