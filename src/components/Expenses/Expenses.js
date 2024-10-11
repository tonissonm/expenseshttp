import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import NewExpense from '../NewExpense/NewExpense'
import './Expenses.css';
import {useState} from 'react';
const Expenses=(props)=>{
  const [filteredYear,setFilteredYear] = useState('2024');
  const filteredYearHandler = (filteredYear) => {
    console.log(filteredYear)
  } 

  const filteredExpenses =props.expenses.filter((expense)=>{
    return expense.date.getFullYear() == filteredYear
  })

  let expensesContent = <p>No expenses found.</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseItem expenseData={expense} key ={expense.id}/>
    })
  }
  

    return (
      <Card className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter= {filteredYearHandler} 
          />
          {
            filteredExpenses.length === 0 && <p>No expenses found.</p> 
          }
          {
          
            filteredExpenses.length>0 && props.expenses.map((expense) => {
                return <ExpenseItem expenseData={expense} key={expense.id}/>
            })
          }
      </Card>
    )
}
export default Expenses;