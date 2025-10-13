import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

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
    textButton: {
        fontSize: 16,
        color: 'white',
        fontWeight:'bold'
    }
})