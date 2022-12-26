import { FunctionComponent, ReactNode, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import styles from './LocationSelectorStyles';
import { MapPreview } from '../../components';

interface ILocation {
    lat: number,
    long: number
}

interface ILocationMap {
    onLocation: ({lat, long}: ILocation) => void,
}

const LocationSelector: FunctionComponent<ILocationMap> = ({ onLocation }: ILocationMap) => {
    const [pickedLocation, setPickedLocation] = useState<ILocation>();

    const verifyPermissions: () => Promise<boolean> = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos de la localización para usar la aplicación',
                [{ text: 'OK' }]
            )
            return false
        }
        return true;
    }

    const handleGetLocation: () => void = async () => {
        const isLocationOk: boolean = await verifyPermissions();
        if (!isLocationOk) return;

        const location = await Location.getCurrentPositionAsync({
            timeInterval: 5000,
        })

        setPickedLocation({
            lat: location.coords.latitude,
            long: location.coords.longitude
        });

        onLocation({
            lat: location.coords.latitude,
            long: location.coords.longitude
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                <MapPreview location={pickedLocation} style={styles.preview}>
                    <Text>Location in process...</Text>
                </MapPreview>
            </View>
            <Button
                title='Get Location'
                color='#005785'
                onPress={handleGetLocation}
            />
        </View>
    )
}

export default LocationSelector;
