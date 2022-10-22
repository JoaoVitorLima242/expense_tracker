import { useContext, useEffect } from "react"
import { getExpensesRequest } from "../../api"
import ExpensesOutput from "../../components/Expenses/Output"
import { ExpensesContext } from "../../store/Expenses/context"


const AllExpenses = () => {
    const {expenses, setExpenses} = useContext(ExpensesContext)

    useEffect(() => {
        const fetchData = async () => {
            const expensesResponse = await getExpensesRequest()

            setExpenses(expensesResponse)
        }

        fetchData()
    }, [])

    return (
        <ExpensesOutput 
            expenses={expenses} 
            expensesPeriod="Total"
            fallbackText='No registered expenses found.'
        />
    )
}

export default AllExpenses