import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GlobalStyles } from "../assets/styles/GlobalStyles";

import ManageExpenses from "../screens/ManageExpenses";
import ExpensesOverview from "./ExpensesOverview";

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
    namespace ReactNavigation {
      interface RootParamList {
        AllExpenses: undefined;
        ManageExpense:undefined;
        RecentExpense: undefined;
      }
    }
  }   

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
                <Screen name="ManageExpense" component={ManageExpenses} options={{
                    presentation: 'modal'
                }}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation