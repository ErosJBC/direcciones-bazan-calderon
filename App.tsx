import 'react-native-gesture-handler';
import { FunctionComponent } from 'react';
import Render from './src';
import { NavigationContainer } from '@react-navigation/native';

const App: FunctionComponent<{}> = () => {
    return (
        <NavigationContainer>
            <Render />
        </NavigationContainer>
    )
}

export default App;