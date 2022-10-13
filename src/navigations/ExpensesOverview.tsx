import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { GlobalStyles } from "../assets/styles/GlobalStyles"
import { Ionicons } from '@expo/vector-icons'

// Screen
import AllExpenses from "../screens/AllExpenses"
import RecentExpenses from "../screens/RecentExpenses"

const { Navigator, Screen } = createBottomTabNavigator()

const ExpensesOverview = () => {
    const {
        colors
    } = GlobalStyles

    return (
        <Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary500,
                },
                headerTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: colors.primary500,
                },
                tabBarActiveTintColor: colors.accent500
            }}
        >
            <Screen 
                name="RecentExpenses" 
                component={RecentExpenses}
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ({color, size}) => <Ionicons color={color} size={size} name='hourglass'/>
                }}
            />
            <Screen 
                name="AllExpenses" 
                component={AllExpenses}
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All',
                    tabBarIcon: ({color, size}) => <Ionicons color={color} size={size} name='calendar'/>
                }}
            />
        </Navigator>
    )
}

export default ExpensesOverview