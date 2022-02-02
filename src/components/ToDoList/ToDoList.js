import {ToDoListItem} from "../ToDoListItem/ToDoListItem";

const ToDoList = ({toDo, dispatch}) => {
    return (
        <div>
            {
                toDo.map(item=> <ToDoListItem key={item.id} item={item} dispatch={dispatch}/>)
            }
        </div>
    );
};

export {ToDoList};