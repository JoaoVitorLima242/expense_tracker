import { useNavigation } from "@react-navigation/native"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../../../assets/styles/GlobalStyles"
import { formatedDate } from "../../../helpers/date"
import { Expense } from "../../../types"

type Props = {
    item: Expense
}

const ExpensesItem = ({item}: Props) => {
    const navigation = useNavigation();
    
    const {
        description,
        amount,
        date,
        id
    } = item
    
    const expensePressHandler = () => {
        navigation.navigate('ManageExpense', {expenseId: id})
    }

    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={expensePressHandler}>
            <View style={styles.container}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={[styles.textBase]}>{formatedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={[styles.textBase, styles.amount]}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
   )
}

export default ExpensesItem

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: GlobalStyles.colors.primary400,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    },
    pressed: {
        opacity: 0.75
    }
})