import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container:  {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxTop: {
        height:Dimensions.get("window").height/3,
        width:"100%",
        // /backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    boxMid: {
        height:Dimensions.get("window").height/4,
        width:"100%",
        backgroundColor:'green',
        paddingHorizontal:37
    },
    boxBottom: {
        height:Dimensions.get("window").height/3,
        width:"100%",
        backgroundColor:'blue'
    },
    logo: {
        width: 80,
        height: 80
    },
    text: {
        fontSize: 18,
        fontWeight:'bold',
        marginTop: 40
    },
    titleInput: {
        marginTop: 20,
        marginLeft: 5,
        color:themes.colors.grey
    },
    boxInput: {
        width:'100%',
        height: 40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row'
    },
    input: {
        height:'100%',
        width:'100%',
        backgroundColor:'red'
    }
}) 