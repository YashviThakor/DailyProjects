import { useTask } from "../context/TaskContext";
import TaskItem from "./TaskItem";
import { Task } from "../context/TaskContext"; 

const TaskList: React.FC = () => {
  const { tasks, completedCount } = useTask();

  return (
    <div className="task-list-container">
      <h3>Task List (Completed: {completedCount})</h3>
      <ul className="task-list">
        {tasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
