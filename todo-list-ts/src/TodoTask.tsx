import React from 'react'
import { ITask } from './Interfaces'

type Props = {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className='taskCard'>
      <div className="taskContent">
        <span>
          {task.taskName}
        </span>
        <span>
          {task.deadline} days
        </span>
      </div>
      <button onClick={() => completeTask(task.taskName)}> X </button>
    </div>
  )
}

export default TodoTask