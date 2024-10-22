import ExpenseItem  from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props)=>{
    return(
        <>
            {
                props.expenses.length === 0 && <p>No expenses found.</p>
            }
            <ul>
                {
                    props.expenses.length > 0 && props.expenses.map((expense) => {
                        return <ExpenseItem expenseData={expense} key={expense.id}/>
                    })
                }
            </ul>
        </>
    )
}
export default ExpensesList