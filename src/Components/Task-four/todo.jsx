import { useState } from "react";

function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (!task.trim()) return;

        setTodos([
            ...todos,
            {
                id: Date.now(),
                text: task,
                completed: false
            }
        ]);

        setTask("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const totalTasks = todos.length;
    const completedTasks = todos.filter(t => t.completed).length;

    return (
        <div className="w-full p-4 border ">
            <h2 className="text-xl font-bold mb-3">Todo App</h2>

            {/* Add Task */}
            <div className="flex gap-2 mb-3">
                <input
                    type="text"
                    placeholder="Enter task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="border p-2 flex-1 rounded"
                />
                <button
                    onClick={addTodo}
                    className="bg-green-500 text-white px-3 rounded"
                >
                    Add
                </button>
            </div>

            {/* Task List */}
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between border p-2 rounded"
                    >
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(todo.id)}
                            />
                            <span
                                className={
                                    todo.completed
                                        ? "line-through text-gray-500"
                                        : ""
                                }
                            >
                                {todo.text}
                            </span>
                        </div>

                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="text-red-500"
                        >
                            DeleteTodo
                        </button>
                    </li>
                ))}
            </ul>

            {/* Stats lists        */}
            <div className="mt-4 border-t pt-2 text-sm">
                <p>Total Tasks: {totalTasks}</p>
                <p>Completed Tasks: {completedTasks}</p>
            </div>
        </div>
    );
}

export default TodoApp;
