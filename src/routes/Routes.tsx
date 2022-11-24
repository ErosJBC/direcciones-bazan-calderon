import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import { Counter, Home, Login, Savings } from '../screens'

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Counter' component={Counter} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Savings' component={Savings} />
        </Stack.Navigator>
    )
}

export default Routes