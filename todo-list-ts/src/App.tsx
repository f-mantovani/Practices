import React, { FC, useState } from 'react';
import './App.css';
import {ITask} from './Interfaces';
import TodoTask from './TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number | string>('');
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else if (e.target.name === 'deadline') {
      setDeadline(Number(e.target.value));
    }
  }

  const addTask = (): void => {
    const newTask: ITask = { taskName: task, deadline: deadline };
    if (task && deadline) {
      setTodoList([...todoList, newTask]);
      setTask('');
      setDeadline('');
    }
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter(t => t.taskName !== taskNameToDelete));
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder='Task...' name='task' value={task} onChange={handleChange} />
          <input type="number" placeholder='Deadline (in days)' name='deadline' value={deadline} onChange={handleChange} />
        </div>

        <button onClick={addTask}>Add task</button>
      </div>

      <div className="todoList">
        {todoList.map((task: ITask, key: number) => { return <TodoTask key={key} task={task} completeTask={completeTask} /> })}
        
      </div>  

    </div>
  );
}

export default App;
