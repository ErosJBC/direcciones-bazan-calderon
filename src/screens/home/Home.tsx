import { FunctionComponent } from 'react';
import { Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import INavigation from '../../models/INavigation';
import styles from './HomeStyles';

const HelloWorld: FunctionComponent<INavigation> = ({ navigation } : INavigation) => {
    const navigateTo: (pathName: string) => void = (pathName: string) => navigation.navigate(pathName);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigateTo('Counter')}>
                    <Text style={styles.titleButton}>Ir a Contador</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigateTo('Login')}>
                    <Text style={styles.titleButton}>Ir a AppSavings</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default HelloWorld;
