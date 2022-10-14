import { GestureResponderEvent, Pressable, StyleSheet, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'

type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    size: number
    color: string | undefined;
    onPress: (event: GestureResponderEvent) => void
}

const IconButton = ({icon, size, color, onPress}: Props) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.container}>
                <Ionicons name={icon} size={size} color={color}/>
            </View>
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 214,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
})