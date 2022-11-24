import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
    },
    button: {
        backgroundColor: '#704096',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 3,
        shadowRadius: 10,
        marginHorizontal: 5
    },
    titleButton: {
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: '500',
        color: 'white'
    }
});

export default styles;