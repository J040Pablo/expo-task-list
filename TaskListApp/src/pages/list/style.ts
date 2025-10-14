import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: "red",
    },
    header: {
        width: "100%",
        height: Dimensions.get('window').height / 6,
        backgroundColor: themas.colors.ligthBlue,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    greeting: {
        fontSize: 20,
        color: "#FFF",
        marginTop: 20
    },
    boxInput: {
        width: "80%",
    },
    boxList: {
        flex: 1,
        width: "100%",
        // backgroundColor: "blue",
    },
    rowCard: {
        width: "100%",
        height: 60,
        backgroundColor: "#FFF",
        marginTop: 6,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: themas.colors.LightGrey,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowCardLeft: {
        width: "70%",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    rowCardRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    },
    titleCard: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    descriptionCard: {
        fontSize: 14,
        color: themas.colors.MidGrey,
    }
})