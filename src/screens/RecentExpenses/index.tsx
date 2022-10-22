import { useContext } from "react"

import ExpensesOutput from "../../components/Expenses/Output"
import { getDateMinusDays } from "../../helpers/date"
import { ExpensesContext } from "../../store/Expenses/context"


const RecentExpenses = () => {
    const {expenses} = useContext(ExpensesContext)

    const recentExpenses = expenses.filter(expense => {
        const today = new Date();

        const date7DaysAgo = getDateMinusDays(today, 7)

        return expense.date > date7DaysAgo
    })

    return (
        <ExpensesOutput 
            fallbackText='No expenses registered for the last 7 days.'
            expenses={recentExpenses} 
            expensesPeriod="Last 7 days" 
        />
    )
}

export default RecentExpenses