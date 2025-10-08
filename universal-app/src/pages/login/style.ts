import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:  {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxTop: {
        height:Dimensions.get("window").height/3,
        width:"100%",
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    boxMid: {
        height:Dimensions.get("window").height/4,
        width:"100%",
        // backgroundColor:'green',
        paddingHorizontal:37
    },
    boxBottom: {
        height:Dimensions.get("window").height/3,
        width:"100%",
        // backgroundColor:'blue',
        alignItems:'center',
    },
    button:{
        width:250,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.ligthBlue,
        borderRadius:40,
        shadowColor: '000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.29,
        shadowRadius: 0.46,
        elevation: 7
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
        color:themas.colors.grey
    },
    boxInput: {
        width:'100%',
        height: 40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themas.colors.LigithGrey,
        borderColor:themas.colors.MidGrey
    },
    input: {
        height:'100%',
        width:'90%',
        paddingLeft: 5,
        // backgroundColor:'red',
        borderRadius:40
    },
    textButton: {
        fontSize: 16,
        color: 'white',
        fontWeight:'bold'
    },
    textBotton: {
        fontSize: 16,
        color: themas.colors.grey
    }
}) 