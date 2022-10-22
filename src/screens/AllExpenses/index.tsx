import { useEffect, useState } from "react"
import { getExpenses } from "../../api"
import ExpensesOutput from "../../components/Expenses/Output"
import { Expense } from "../../types"

const AllExpenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const expensesResponse = await getExpenses()

            console.log(expensesResponse)
            setExpenses(expensesResponse)
        }

        fetchData()
    }, [])

    console.log(expenses)

    return (
        <ExpensesOutput 
            expenses={expenses} 
            expensesPeriod="Total"
            fallbackText='No registered expenses found.'
        />
    )
}

export default AllExpenses