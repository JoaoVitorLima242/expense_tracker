import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

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
            <Navigator>
                <Screen 
                    name="ExpensesOverview" 
                    component={ExpensesOverview} 
                    options={{headerShown: false}}
                />
                <Screen name="ManageExpense" component={ManageExpenses}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation