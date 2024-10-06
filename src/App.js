
import './App.css';
import ExpenseItem from './components/ExpenseItem';
const data = [{
  date: new Date(2023,9,6),
  title: 'New book',
  price: 30.99
},
{
  date: new Date(2024,9,6),
  title: 'Second Bokk',
  price: 34.99
}]

function App() {
  return (
    <div className="app">
      <ExpenseItem
      expenseData = {data[0]}/>
      <ExpenseItem
      expenseData = {data[1]}/>
    </div>
  )
}

export default App;
