import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"
import {useState} from 'react'
const NewExpense = (props) =>{
    const [editForm,setEditForm] = useState(false);
    const saveExpenseDataHandler= (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setEditForm(false)
    }
    const cancelEditingHandler = ()=>{
        setEditForm(false)
    }
    return(
        <div className="new-expense">
            {!editForm && (<button onClick={()=> setEditForm(true)}>Add a New Expense</button>)}
            {editForm &&(
                
                <div>
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditingHandler}/>
                    <button onClick ={cancelEditingHandler}>Cancel</button>
                </div>
                )}
            
        </div>
    )
} 
export default NewExpense