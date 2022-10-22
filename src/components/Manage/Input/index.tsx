import { TextInputProps, Text, TextInput, View } from "react-native"

type Props = {
    label?: string
    textInputConfig: TextInputProps
}

const Input = ({label, textInputConfig}: Props) => {
    return (
        <View>
            {label && <Text>label</Text>}
            <TextInput {...textInputConfig}/>
        </View>
    )
}

export default Input