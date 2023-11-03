import './App.css';
import AddTodo from './components/addTodo';

function App() {
  return (
    <div className=" h-screen bg-cover w-screen">
      <h1 className=' bg-black text-4xl text-white p-2 text-center mb-4'>TODO-APPLICATION</h1>
      <AddTodo/>
    </div>
  );
}

export default App;
