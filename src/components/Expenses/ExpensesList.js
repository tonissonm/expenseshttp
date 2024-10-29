import ExpenseItem  from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props)=>{
    if(props.isLoading){
            return <p className="expenses-list__fallback"><b>Fetching expenses data...</b></p>
        }
    if(props.filteredExpenses.length === 0){
        return <p className="expenses-list__fallback">No expenses found</p>
    }
    props.expenses.length > 0 && props.expenses.map((expense) => {
        return <ExpenseItem expenseData={expense} key={expense.id}/>
    })
}
export default ExpensesList