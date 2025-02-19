import React, { useState, useEffect } from "react";
import "../App.css";

const TodoApp = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState("");
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const addTodo = () => {
        if (newTodo.trim() === "") return;

        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setNewTodo("");
    };

    const editTodo = (index: number) => {
        setNewTodo(todos[index]);
        setEditIndex(index);
    };

    const updateTodo = () => {
        if (newTodo.trim() === "" || editIndex === null) return;
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newTodo;
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));

        setNewTodo("");
        setEditIndex(null);
    };
    const confirmDelete = (index: number) => {
        setDeleteIndex(index);
        setShowModal(true);
    };
    const deleteTodo = () => {
        if (deleteIndex === null) return;
        const updatedTodos = todos.filter((_: any, i: number) => i !== deleteIndex);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setShowModal(false);
    };

    return (
        <>
            <div className="container">
                <h2>TODO List</h2>
                {/* Input and Update Button*/}
                <div className="input-section">
                    <input
                        type="text"
                        value={newTodo}

                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Enter Your Task"
                    />
                    <button onClick={editIndex !== null ? updateTodo : addTodo}>
                        {editIndex !== null ? "update" : "Add"}
                    </button>
                </div>
                {/* Displaying TODO  */}
                <ul className="todo-list">
                    {todos.map((todo: string, index: number) => (
                        <li key={index} className="todo-item">
                            {todo}
                            <div className="buttons">
                                <button className="edit-btn" onClick={() => editTodo(index)}>Edit</button>
                                <button className="delete-btn" onClick={() => confirmDelete(index)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* Delete Modal */}
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>Are you sure you want to delete ?</p>
                            <button className="confirm-btn" onClick={deleteTodo}>Yes</button>
                            <button className="cancel-btn" onClick={() => setShowModal(false)}>No</button>

                        </div>
                    </div>
                )}

            </div>
        </>
    );
};
export default TodoApp;