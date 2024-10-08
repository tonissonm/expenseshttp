import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react';

const DYMMY_EXPENSES = [{
id: 'id1',
  date: new Date(2023,9,6),
  title: 'New book',
  price: 30.99
},
{
  id: 'id2',
  date: new Date(2024,9,6),
  title: 'Second Bokk',
  price: 34.99
},
{
  id: 'id3',
  date: new Date(2024,10,15),
  title: 'Uus Jalg',
  price: 50.00
}]

const App = () => {
  const [expenses,setExpenses] = useState(DYMMY_EXPENSES);
  const addExpenseHandler = (expense) =>{
    console.log(expense)
    setExpenses((previousExpenses)=>{
      return [expense,...previousExpenses]})
  }  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App;
