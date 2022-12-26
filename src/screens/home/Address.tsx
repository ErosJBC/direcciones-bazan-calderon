import { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import { LocationSelector } from '../../components';

const Address: FunctionComponent<{}> = () => {
    return (
        <View>
            <LocationSelector onLocation={({ lat, long }) => console.log('Hola')} />
        </View>
    )
}

export default Address;
