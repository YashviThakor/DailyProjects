import { useState } from "react";
import { useTask } from "../context/TaskContext";

const TaskInput: React.FC = () => {
  const [text, setText] = useState("");
  const { addTask } = useTask();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
        className="task-input"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
};

export default TaskInput;
