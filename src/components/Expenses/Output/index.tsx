import { StyleSheet, View } from "react-native"
import { GlobalStyles } from "../../../assets/styles/GlobalStyles"

// Types
import { Expense } from "../../../types"
// List
import ExpensesList from "../List"
import ExpensesSummary from "../Summary"

type Props = {
    expensesPeriod: string
    expenses: Expense[]
}

const ExpensesOutput = ({ expenses, expensesPeriod}: Props) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses}/>
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1
    }
})