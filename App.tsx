import { StatusBar } from 'expo-status-bar';

import Navigation from './src/navigations';
import ExpensesProvider from './src/store/Expenses/context';

export default function App() {
  return (
    <ExpensesProvider>
      <StatusBar style="light" />
      <Navigation />
    </ExpensesProvider>
  );
}