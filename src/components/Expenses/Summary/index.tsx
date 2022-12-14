import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../../../assets/styles/GlobalStyles"
import { formatedPrice } from "../../../helpers/pricing"
import { Expense } from "../../../types"

type Props = {
    periodName: string
    expenses: Expense[]
}

const ExpensesSummary = ({expenses, periodName}: Props) => {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)
    
    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>$ {formatedPrice(expensesSum)}</Text>
        </View>
    )
}

export default ExpensesSummary

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 24
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    }
})