import { useTask } from "../context/TaskContext";
import { Task } from "../context/TaskContext"; 

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { toggleTask, removeTask } = useTask();

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => removeTask(task.id)} className="remove-button">Remove</button>
    </li>
  );
};

export default TaskItem;
