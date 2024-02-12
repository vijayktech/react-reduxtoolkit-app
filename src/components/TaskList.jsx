import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../actions";

const TaskList = () => {
    const tasks = useSelector((state) => state.indexReducer.tasksObj);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return <>
        <div className="tasklist">
            <div className="display-tasks">
                <h3> Your Tasks </h3>
                <ul className="tasks">
                    {tasks.map((task) => (
                        <li className="task" key={task.id}>
                            {task.text}
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(task.id)}
                            >
                                delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
}
export default TaskList;