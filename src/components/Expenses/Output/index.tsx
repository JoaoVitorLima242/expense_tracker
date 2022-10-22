import { ReactNode } from "react"
import { StyleSheet, Text, View } from "react-native"

import { GlobalStyles } from "../../../assets/styles/GlobalStyles"
// Types
import { Expense } from "../../../types"
// Components
import ExpensesList from "../List"
import ExpensesSummary from "../Summary"

type Props = {
    expensesPeriod: string;
    expenses: Expense[];
    fallbackText: ReactNode;
}

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText}: Props) => {
    let content: ReactNode = <Text style={styles.infoText}>{fallbackText}</Text>

     if(expenses.length > 0) {
        content = <ExpensesList expenses={expenses}/>
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            {content}
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
        paddingBottom: 0
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
})