import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState,useEffect} from 'react';

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
  date: new Date(2025,1,5),
  title: 'Uus Jalg',
  price: 50.01
}]

const App = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [expenses,setExpenses] = useState([])
  const [error,setError] = useState(null)
  const [showError,setShowError] = useState(null)
  useEffect(()=> {
    const getExpenses = async() => {
      setIsFetching(true)
      try{
        const response =await fetch('http://localhost:3002/expenses');
        const responseData = await response.json()
        if(!response.ok){
          throw new Error('Failed fetching data')
        }
        setExpenses(responseData.expenses)
        
      }
      catch(error){
        setError({
          title: 'An error occured!',
          message: 'Failed fetchign expenses data, please try again later'
        })
      }
      setIsFetching(false)
    }
    getExpenses()
    console.log(expenses)
  },[])
  
  const addExpenseHandler = (expense) =>{
    console.log(expense)
    setExpenses((previousExpenses)=>{
      return [expense,...previousExpenses]})
  }  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} isLoading ={isFetching}/>
    </div>
  )
}

export default App;
