import { FunctionComponent } from "react";
import { Text, View, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ButtonFab } from "../../components";
import { INavigation } from '../../models';
import { addAmount, substractAmount } from "../../store/actions";
import styles from "./CounterStyles";

const Counter: FunctionComponent<INavigation> = ({ navigation }: INavigation) => {

    const amount: number = useSelector<number, any>((state: any) => state.saveAmount.currentAmount);
    const dispatch = useDispatch();

    const navigateTo: (pathName: string) => void = (pathName: string) => navigation.navigate(pathName);
    
    const onPressCounter: (operation: string) => void = (operation: string) => {
        if (operation === 'add') dispatch(addAmount(amount));
        else if (operation === 'substract') dispatch(substractAmount(amount));
    };

    return(
        <View style={styles.container}>
            {/* <Pressable onPress={() => navigateTo('Home')}>
                <Text style={styles.titleBack}>Ir al inicio</Text>
            </Pressable> */}
            <Text style={styles.text}>Monto de Ahorro: { amount }</Text>
            <ButtonFab title="-1" onPress={() => onPressCounter('substract')} position="bottomLeft" />
            <ButtonFab title="+1" onPress={() => onPressCounter('add')} position="bottomRight" />
        </View>
    )
}

export default Counter;