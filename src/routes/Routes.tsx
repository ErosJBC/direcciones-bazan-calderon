import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import { Savings } from '../screens'

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Savings' component={Savings} />
        </Stack.Navigator>
    )
}

export default Routes