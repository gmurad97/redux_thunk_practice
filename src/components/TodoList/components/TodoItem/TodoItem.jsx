import { useId } from "react";
import "./TodoItem.css";

const TodoItem = ({ data }) => {
    const checkBoxId = useId();

    return (
        <article className="todo__item">
            <h1 className="todo__item-heading">
                <span className="todo__item-heading-mark">{data.id}.</span>
                {data.todo}
            </h1>
            <div className="todo__item-body">
                <label>
                    <input type="checkbox" id={checkBoxId} defaultChecked={data.completed} />
                    <span>Completed ?!</span>
                </label>
            </div>
        </article>
    );
}

export default TodoItem;