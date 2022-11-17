import { View, Text, TextInput, Button } from 'react-native';
import { FunctionComponent, useState } from 'react';
import { USERNAME, PASSWORD } from '../../constants';
import { INavigation } from '../../models';
import styles from './LoginStyles';

const Login: FunctionComponent<INavigation> = ({ navigation } : INavigation) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onChangeUsername: (username: string) => void = (username: string) => setUsername(username);
    const onChangePassword: (password: string) => void = (password: string) => setPassword(password);

    const onTouchMove: () => void = () => {
        setErrorMessage(null);
    }

    const validateCredentials: (username: string, password: string) => void = (username: string, password: string) => {
        if (username === USERNAME && password === PASSWORD) {
            setUsername('');
            setPassword('');
            navigation.navigate('Savings');
        }
        else setErrorMessage('Credenciales no válidas!')
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.titleCard}>Bienvenido a SavingsApp</Text>
                <Text style={styles.subTitleCard}>Iniciar Sesión</Text>
                <View style={styles.containerInput}>
                    <TextInput
                        placeholder='Usuario'
                        placeholderTextColor='gray'
                        style={styles.input}
                        onChangeText={onChangeUsername}
                        onTouchMove={onTouchMove}
                        value={username}
                    />
                    <TextInput
                        placeholder='Contraseña'
                        placeholderTextColor='gray'
                        style={[styles.input, styles.marginBottom20]}
                        onChangeText={onChangePassword}
                        onTouchMove={onTouchMove}
                        value={password}
                    />
                    { !!errorMessage && <Text style={styles.error}>{ errorMessage }</Text>}
                    <Button
                        title='Entrar'
                        color='#73c257'
                        onPress={() => validateCredentials(username, password)}
                    />
                </View>
            </View>
        </View>
    )
}

export default Login;