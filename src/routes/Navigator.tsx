import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Counter, Savings } from '../screens';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FA from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <Tab.Navigator screenOptions={{ 
            headerTitleAlign: 'center',
            tabBarActiveBackgroundColor: '#122a46',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            headerStyle: {
                backgroundColor: '#122a46',
            },
            headerTitleStyle: {
                color: 'white',
                fontWeight: '700'
            }
        }}>
            <Tab.Screen
                name='Contador'
                component={Counter}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <MCI name='counter' color={color} size={20} />
                    }
                }}
            />
            <Tab.Screen
                name='Ahorros'
                component={Savings}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <FA name='money-bill-wave' color={color} size={15} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Navigator