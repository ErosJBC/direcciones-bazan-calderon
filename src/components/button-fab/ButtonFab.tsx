import { FunctionComponent } from 'react';
import { Platform, Text, TouchableNativeFeedback, View, TouchableOpacity } from 'react-native';
import { IButtonFab } from '../../models';
import styles from './ButtonFabStyles';

const ButtonFab: FunctionComponent<IButtonFab> = ({ title, position = 'bottomRight', onPress }: IButtonFab) => {

    const ios: () => JSX.Element = () => {
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.75}
                style={[styles.buttonFabContainer, (position === 'bottomRight' ? styles.rightPosition : styles.leftPosition)]}
            >
                <View style={styles.buttonFab}>
                    <Text style={styles.buttonFabText}>{title}</Text>
                </View>
            </TouchableOpacity >
        )
    };

    const android: () => JSX.Element = () => {
        return (
            <View
                style={[styles.buttonFabContainer, (position === 'bottomRight' ? styles.rightPosition : styles.leftPosition)]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#4673FE', false, 30)}
                >
                    <View style={styles.buttonFab}>
                        <Text style={styles.buttonFabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return Platform.OS === 'ios' ? ios() : android();
}

export default ButtonFab