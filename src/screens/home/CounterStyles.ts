import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative'
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
    },
    titleBack: {
        top: -300,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        textDecorationLine: 'underline',
        letterSpacing: 0.5
    }
});

export default styles;