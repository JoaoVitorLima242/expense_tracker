import { View } from "react-native"

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
        <View>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses}/>
        </View>
    )
}

export default ExpensesOutput