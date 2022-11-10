import { NavigationContainer } from '@react-navigation/native';
import { FunctionComponent } from 'react';
import { Routes } from './routes';

const Render: FunctionComponent<{}> = () => {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}

export default Render;
