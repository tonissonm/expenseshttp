import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import './Expenses.css'
import {useState} from 'react';


const Expenses=(props)=>{
  const [filteredYear,setFilteredYear] = useState('');
  const filteredYearHandler = (selectedYear) => {
      setFilteredYear(selectedYear)
      console.log('Selected year: ' +selectedYear)
  } 

  const filteredExpenses =props.expenses.filter((expense)=>{
    if(filteredYear === ''){
      return true
    }
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No expenses found.</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseItem expenseData={expense} key ={expense.id}/>
    })
  }
  

    return (
      <Card className='expenses'>
          <ExpensesFilter selected = {filteredYear} onChangeFilter ={filteredYearHandler}
          />
          <ExpensesList expenses ={filteredExpenses}/>
        
      </Card>
    )
}
export default Expenses;