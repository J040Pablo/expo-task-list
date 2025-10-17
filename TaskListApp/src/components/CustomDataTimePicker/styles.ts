import { StyleSheet } from "react-native"; 
import { themas } from "../../global/themes";

const styles = StyleSheet.create({

    ModalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themas.colors.transparent
    },
    Container: {
        width: '80%',
        padding: 16,
        backgroundColor: '#fff',
        elevation: 5,
        alignItems: 'center',
    },
    dateText: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    }
});

export default styles;
