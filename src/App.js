import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Landry',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
  },
  {
    id: 2,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
  },
  {
    id: 3,
    text: 'Boxing',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
  },
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
