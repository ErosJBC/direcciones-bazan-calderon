import React, { FunctionComponent, ReactNode } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './MapPreviewStyles';
import { API_KEY } from '../../constants';

interface ILocation {
    lat: number,
    long: number
}

interface ILocationMap {
    location?: ILocation;
    style?: any,
    children?: ReactNode
}

const MapPreview: FunctionComponent<ILocationMap> = ({ location, style, children }: ILocationMap) => {
    const MapPreviewUrl = location ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.long}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${location.lat},${location.long}&key=${API_KEY}` : '';  

    return (
        <View style={{...styles.mapPreview, ...style}}>
            { location ? (
                <Image style={styles.mapImage} source={{ uri: MapPreviewUrl}} />
            ) : (
                children
            )}
        </View>
    )
}

export default MapPreview;
