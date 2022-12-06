import { FunctionComponent, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { ButtonFab } from "../../components";
import { INavigation } from '../../models';
import styles from "./CounterStyles";

const Counter: FunctionComponent<INavigation> = ({ navigation }: INavigation) => {

    const [counter, setCounter] = useState<number>(10);

    const navigateTo: (pathName: string) => void = (pathName: string) => navigation.navigate(pathName);
    
    const onPressCounter: (operation: string) => void = (operation: string) => {
        if (operation === 'add') setCounter(counter + 1);
        else if (operation === 'substract') setCounter(counter - 1);
    };

    return(
        <View style={styles.container}>
            {/* <Pressable onPress={() => navigateTo('Home')}>
                <Text style={styles.titleBack}>Ir al inicio</Text>
            </Pressable> */}
            <Text style={styles.text}>Contador: { counter }</Text>
            <ButtonFab title="-1" onPress={() => onPressCounter('substract')} position="bottomLeft" />
            <ButtonFab title="+1" onPress={() => onPressCounter('add')} position="bottomRight" />
        </View>
    )
}

export default Counter;