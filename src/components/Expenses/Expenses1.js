import React from 'react';
import { Card } from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem'; 
const Expenses = (props) => {
  const filterYearHandler = (filteredYear) => {
    console.log('Year data in Expenses.js ' + filteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterYearHandler} />
      {
        props.expense.map((expense) => {
          return <ExpenseItem expenseData={expense} key={expense.id} />;
        })
      }
    </Card>
  );
};

export default Expenses;