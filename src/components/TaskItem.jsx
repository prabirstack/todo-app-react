import { useState } from 'react'
import styles from './TaskItem.module.css'
import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

export default function TaskItem({
  task,
  deleteTask,
  toggleTask,
  enterEditMode,
}) {
  const [isChecked, setIsChecked] = useState(task.checked)

  const handleCheckboxChanged = () => {
    setIsChecked((prev) => !prev)
    toggleTask(task.id)
  }

  return (
    <li className={styles.task}>
      <div className={styles['task-group']}>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChanged}
          name={task.name}
          id={task.id}
          className={styles.checkbox}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles['task-group']}>
        <button
          className='btn'
          aria-level={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-level={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  )
}
