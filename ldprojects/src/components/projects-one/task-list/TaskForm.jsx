import { useState, useEffect } from "react";
import "./TaskForm.scss";

function TaskForm({ addTask }) {
    const [newTask, setNewTask] = useState("");
    const [taskExists, setTaskExists] = useState(false);
    const [showStartTyping, setShowStartTyping] = useState(false);

    // useEffect(() => {
    //     let timer;
    //     if (taskExists) {
    //         timer = setTimeout(() => {
    //             setTaskExists(false);
    //         }, 4000);
    //     }

    //     return () => clearTimeout(timer);
    // }, [taskExists]);

    function handleSubmit(e) {
        e.preventDefault();
        if (newTask === "") {
            setShowStartTyping(true);
            setTimeout(() => {
                setShowStartTyping(false);
            }, 4000)
            return;
        }

        const exists = addTask(capitalizeFirstLetter(newTask));

        if (exists) {
            setTaskExists(true);
            setTimeout(() => {
                setTaskExists(false);
            }, 4000)
        } else {
            setNewTask("");
            setTaskExists(false);
        }
    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="task-form__row">
            {showStartTyping && newTask === "" && (
                    <span className="task-form__start-typing">Start typing...</span>
                )}{showStartTyping && newTask === "" && (
                    <span className="task-form__start-typing">Start typing...</span>
                )}
                <label htmlFor="item">Create new task:</label>
                <input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="task-form__submit">Set tastk</button>
            { taskExists && (
                <span className="task-form__duplicate-notification">Task already created</span>
            )}
        </form>
    );
}

export default TaskForm;
