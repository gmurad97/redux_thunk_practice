import { useEffect } from "react";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import { selectTodoErrors, selectTodoIsLoading, selectTodoList } from "../../store/todo/todoSelectors.js";
import { getTodoList } from "../../store/todo/todoThunks.js";

const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);
    const todoErrors = useSelector(selectTodoErrors);
    const todosIsLoading = useSelector(selectTodoIsLoading);

    useEffect(() => {
        dispatch(getTodoList());
    }, [dispatch]);

    return (
        <>
            {todosIsLoading && (
                <div className="todo__list-loading-wrapper">
                    <div className="todo__list-loading"></div>
                </div>
            )}
            {todoErrors && (
                <div className="todo__list-errors">
                    <h1 className="todo__list-error">{todoErrors}</h1>
                </div>
            )}
            {todoList.length > 0 && (
                <section className="todo__list">
                    {todoList.map(item => (
                        <TodoItem data={item} key={item.id} />
                    ))}
                </section>
            )}
        </>
    );
}

export default TodoList;