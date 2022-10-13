import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Screen
import AllExpenses from "../screens/AllExpenses"
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