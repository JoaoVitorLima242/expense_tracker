import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import ManageExpense from "../screens/ManageExpense";
import { RootStackParamList } from "../types";

import ExpensesOverview from "./ExpensesOverview";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      AllExpenses: undefined;
      ManageExpense: {expenseId?: string} | undefined;
      RecentExpense: undefined;
    }
  }
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                    headerTintColor: 'white'
                }}
            >
                <Screen 
                    name="ExpensesOverview" 
                    component={ExpensesOverview} 
                    options={{headerShown: false}}
                />
                <Screen name="ManageExpense" component={ManageExpense} options={{
                    presentation: 'modal'
                }}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation