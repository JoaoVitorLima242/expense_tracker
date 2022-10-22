import { TextInputProps, Text, TextInput, View, StyleSheet, TextStyle, StyleProp } from "react-native"
import { GlobalStyles } from "../../../assets/styles/GlobalStyles"

type Props = {
    label?: string
    textInputConfig?: TextInputProps
}

const Input = ({label, textInputConfig}: Props) => {

    let inputStyles: StyleProp<TextStyle> = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput style={inputStyles} {...textInputConfig}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        color: 'white',
        marginBottom: 4
    },
    input: {
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 6,
        fontSiz: 18,
        color: GlobalStyles.colors.primary700
    },
    inputMultiline: {
        height: 100
    }
})