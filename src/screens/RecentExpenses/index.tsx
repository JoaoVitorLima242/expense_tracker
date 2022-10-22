import moment from "moment"
import { useContext, useEffect, useState } from "react"
import { getExpensesRequest } from "../../api"

import ExpensesOutput from "../../components/Expenses/Output"
import ErrorOverlay from "../../components/ui/ErrorOverlay"
import LoadingOverlay from "../../components/ui/LoadingOverlay"
import { getDateMinusDays } from "../../helpers/date"
import { ExpensesContext } from "../../store/Expenses/context"
import { Expense } from "../../types"


const RecentExpenses = () => {
    const {setExpenses, expenses} = useContext(ExpensesContext)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const expensesResponse = await getExpensesRequest()
                setExpenses(expensesResponse)
            } catch (err) {
                setError('Could not fetch expenses!')
            }
            setIsLoading(false)

        }

        fetchData()
    }, [])

    const errorHandler = () => {
        setError('')
    }

    
    if (isLoading) {
        return <LoadingOverlay />
    }
    
    if (error) {
        return <ErrorOverlay 
        message={error}
        onConfirm={errorHandler}
        />
    }
    
    const recentExpenses = expenses.filter(expense => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7)

        return moment(expense.date).diff(date7DaysAgo) >= 0

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