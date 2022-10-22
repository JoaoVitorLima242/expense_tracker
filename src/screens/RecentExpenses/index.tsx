import moment from "moment"
import { useContext, useEffect, useState } from "react"
import { getExpenses } from "../../api"

import ExpensesOutput from "../../components/Expenses/Output"
import { getDateMinusDays } from "../../helpers/date"
import { ExpensesContext } from "../../store/Expenses/context"
import { Expense } from "../../types"


const RecentExpenses = () => {
    const {setExpenses, expenses} = useContext(ExpensesContext)
    // const [expenses, setExpenses] = useState<Expense[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const expensesResponse = await getExpenses()

            setExpenses(expensesResponse)
        }

        fetchData()
    }, [])

    const recentExpenses = expenses.filter(expense => {
        const today = new Date();

        const date7DaysAgo = getDateMinusDays(today, 7)

        console.log(moment(expense.date).diff(date7DaysAgo) >= 0)

        return moment(expense.date).diff(date7DaysAgo) >= 0

    })

    console.log(recentExpenses)

    return (
        <ExpensesOutput 
            fallbackText='No expenses registered for the last 7 days.'
            expenses={recentExpenses} 
            expensesPeriod="Last 7 days" 
        />
    )
}

export default RecentExpenses