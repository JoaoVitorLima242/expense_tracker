import { useContext, useEffect, useState } from "react"
import { getExpenses } from "../../api"
import ExpensesOutput from "../../components/Expenses/Output"
import { ExpensesContext } from "../../store/Expenses/context"
import { Expense } from "../../types"

const AllExpenses = () => {
    const {expenses, setExpenses} = useContext(ExpensesContext)

    useEffect(() => {
        const fetchData = async () => {
            const expensesResponse = await getExpenses()
            
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