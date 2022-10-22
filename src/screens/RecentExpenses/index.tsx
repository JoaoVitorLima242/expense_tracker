import moment from "moment"
import { useContext, useEffect, useState } from "react"
import { getExpensesRequest } from "../../api"

import ExpensesOutput from "../../components/Expenses/Output"
import LoadingOverlay from "../../components/ui/LoadingOverlay"
import { getDateMinusDays } from "../../helpers/date"
import { ExpensesContext } from "../../store/Expenses/context"
import { Expense } from "../../types"


const RecentExpenses = () => {
    const {setExpenses, expenses} = useContext(ExpensesContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const expensesResponse = await getExpensesRequest()
            setIsLoading(false)

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

    if (isLoading) {
        return <LoadingOverlay />
    }

    return (
        <ExpensesOutput 
            fallbackText='No expenses registered for the last 7 days.'
            expenses={recentExpenses} 
            expensesPeriod="Last 7 days" 
        />
    )
}

export default RecentExpenses