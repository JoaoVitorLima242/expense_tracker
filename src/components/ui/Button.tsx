import { ReactNode } from "react"
import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import { GlobalStyles } from "../../assets/styles/GlobalStyles";

type Props = {
    children: ReactNode;
    onPress?: (event: GestureResponderEvent) => void;
    outline?: boolean
    style: StyleProp<ViewStyle>
}

const Button = ({children, onPress, outline, style}: Props) => {
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
            >
                <View style={[styles.container, outline && styles.flat]}>
                    <Text style={[styles.buttonText, outline && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    flatText: {
        color: GlobalStyles.colors.primary500,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    }
})