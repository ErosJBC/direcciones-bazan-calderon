import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './HelloWorldStyles';

const HelloWorld: FunctionComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <Text>Starting with React Native</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default HelloWorld;
