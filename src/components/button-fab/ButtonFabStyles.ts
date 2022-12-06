import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonFabContainer: {
        position: 'absolute',
        bottom: 15,
    },
    rightPosition: {
        right: 15,
    },
    leftPosition: {
        left: 15,
    },
    buttonFab: {
        backgroundColor: '#4649FE',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    buttonFabText: {
        color: 'white',
        fontFamily: 'JetBrainsMonoMedium',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center'
    }
})

export default styles;