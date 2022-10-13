import { View } from "react-native"
import { Expense } from "../../../types"
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
            <ExpensesList />
        </View>
    )
}

export default ExpensesOutput