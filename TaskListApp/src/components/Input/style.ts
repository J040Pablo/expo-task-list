import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    boxInput: {
        width:'100%',
        height: 40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themas.colors.LightGrey,
        borderColor:themas.colors.MidGrey
    },
    input: {
        height:'100%',
        width:'90%',
        paddingLeft: 5,
        // backgroundColor:'red',
        borderRadius:40
    },
    titleInput: {
        marginTop: 20,
        marginLeft: 5,
        color:themas.colors.grey
    },
    Icon: {
        width:'100%'
    },
    Button: {
        width:'10%'
    }
})