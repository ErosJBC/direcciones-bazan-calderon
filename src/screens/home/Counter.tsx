import { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import { ButtonFab } from "../../components";
import styles from "./CounterStyles";

const Counter: FunctionComponent<{}> = () => {

    const [counter, setCounter] = useState<number>(10);

    const onPressCounter: (operation: string) => void = (operation: string) => {
        if (operation === 'add') setCounter(counter + 1);
        else if (operation === 'substract') setCounter(counter - 1);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Contador: { counter }</Text>
            <ButtonFab title="-1" onPress={() => onPressCounter('substract')} position="bottomLeft" />
            <ButtonFab title="+1" onPress={() => onPressCounter('add')} position="bottomRight" />
        </View>
    )
}

export default Counter;