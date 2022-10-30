interface IButtonFab {
    title: string,
    position?: 'bottomLeft' | 'bottomRight',
    onPress: () => void;
}

export default IButtonFab;