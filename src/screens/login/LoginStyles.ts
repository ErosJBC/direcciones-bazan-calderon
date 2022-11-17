import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00476e',
        paddingTop: 20,
        justifyContent: 'center'
    },
    card: {
        backgroundColor: 'white',
        height: 400,
        margin: 30,
        borderRadius: 5,
    },
    titleCard: {
        textAlign: 'center',
        paddingTop: 50,
        fontSize: 22,
        fontWeight: '600',
        color: '#00476e'
    },
    subTitleCard: {
        textAlign: 'center',
        paddingTop: 25,
        fontSize: 20,
        fontWeight: '600',
        color: '#00476e'
    },
    containerInput: {
        width: '100%',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 40,
    },
    input: {
        height: 40,
        margin: 8,
        borderWidth: 0.5,
        padding: 10,
        width: '85%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5
    },
    marginBottom20: {
        marginBottom: 20
    },
    error: {
        color: 'white',
        backgroundColor: 'red',
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        fontWeight: '600',
        marginBottom: 15
    }
});

export default styles;