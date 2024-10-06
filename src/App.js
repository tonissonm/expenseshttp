
import './App.css';
import Expenses from './components/Expenses/Expenses';
const expense = [{
  id: 1,
  date: new Date(2023,9,6),
  title: 'New book',
  price: 30.99
},
{
  id: 2,
  date: new Date(2024,9,6),
  title: 'Second Bokk',
  price: 34.99
}]

function App() {
  return (
    <div className="App">
      <Expenses expenses={Expenses}/>
    </div>
  )
}

export default App;
