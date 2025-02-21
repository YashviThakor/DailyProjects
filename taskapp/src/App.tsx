import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";
import "./App.css"; 

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
