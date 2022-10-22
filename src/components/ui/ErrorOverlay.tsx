import { GestureResponderEvent, StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../../assets/styles/GlobalStyles"
import Button from "./Button"

type Props = {
    message: string;
    onConfirm: (event: GestureResponderEvent) => void
}

const ErrorOverlay = ({message, onConfirm}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occured!</Text>
            <Text style={styles.text}>{message}</Text>
            <Button onPress={onConfirm}>Okay</Button>
        </View>
    )
}

export default ErrorOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    message: {
        fontSize: 14
    }
})