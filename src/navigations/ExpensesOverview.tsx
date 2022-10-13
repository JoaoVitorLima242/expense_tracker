import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AllExpenses from "../screens/AllExpenses"

// Screen
import ManageExpenses from "../screens/ManageExpenses"
import RecentExpenses from "../screens/RecentExpenses"

const { Navigator, Screen } = createBottomTabNavigator()

const ExpensesOverview = () => {
    return (
        <Navigator>
            <Screen name="RecentExpenses" component={RecentExpenses}/>
            <Screen name="AllExpenses" component={AllExpenses}/>
        </Navigator>
    )
}

export default ExpensesOverview