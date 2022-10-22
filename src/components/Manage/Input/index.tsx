import {  useController } from "react-hook-form"
import { TextInputProps, Text, TextInput, View, StyleSheet, TextStyle, StyleProp, ViewStyle } from "react-native"

import { GlobalStyles } from "../../../assets/styles/GlobalStyles"
import { CustomControl } from "../Form/type";

type Props = {
    label?: string;
    textInputConfig?: TextInputProps;
    style?: StyleProp<ViewStyle>;
    control: CustomControl;
    name: "description" | "amount" | "date";
    defaultValue?: string
}

const Input = ({
    label, 
    style, 
    textInputConfig, 
    control,
    name,
    defaultValue
}: Props) => {
    const { field } = useController({
        name,
        control,
        defaultValue
    })

    let inputStyles: StyleProp<TextStyle> = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                value={field.value}
                onChangeText={field.onChange}
                style={inputStyles} 
                {...textInputConfig}
            />
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
        minHeight: 100,
        textAlignVertical: 'top'
    }
})