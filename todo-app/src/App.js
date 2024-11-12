import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>To-Do Application</h1>
      <AddTask />
      <div>
        <button onClick={() => dispatch(filterTasks('all'))}>All</button>
        <button onClick={() => dispatch(filterTasks('done'))}>Done</button>
        <button onClick={() => dispatch(filterTasks('notDone'))}>Not Done</button>
      </div>
      <ListTask />
    </div>
  );
}

export default App;
