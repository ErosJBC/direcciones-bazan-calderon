import 'react-native-gesture-handler';
import { FunctionComponent } from 'react';
import Render from './src';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/store';

const App: FunctionComponent<{}> = () => {

    const [loaded] = useFonts({
        JetBrainsMonoBold: require('./assets/fonts/static/JetBrainsMono-Bold.ttf'),
        JetBrainsMonoMedium: require('./assets/fonts/static/JetBrainsMono-Medium.ttf'),
        JetBrainsMonoSemiBold: require('./assets/fonts/static/JetBrainsMono-SemiBold.ttf'),
        JetBrainsMonoThin: require('./assets/fonts/static/JetBrainsMono-Thin.ttf'),
        JetBrainsMonoRegular: require('./assets/fonts/static/JetBrainsMono-Regular.ttf'),
    });

    if (!loaded) return null;

    return (
        <Provider store={store}>
            <Render />
        </Provider>
    );
}

export default App;