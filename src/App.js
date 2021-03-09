import './App.css';
import TodoItem from './components/Todoitem'
import todosData from './components/todosData'


function App() {
  const todoItems = todosData.map(item => <TodoItem key ={item.id} item ={item}/>);
  return (
    <div className="App">
     {todoItems}
    </div>
  );
}

export default App;
