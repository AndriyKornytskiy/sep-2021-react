import './ToDoListItem.css'

const ToDoListItem = ({item: {id, name}, dispatch}) => {
    function change(e) {
        if (e.target.checked){
            e.target.parentNode.nextSibling.className = 'change'
        }else{
            e.target.parentNode.nextSibling.className = ''
        }
    }

    return (
        <div className='toDo_item'>
            <div><input name='checkBox' type='checkbox' onChange={change}/></div>
            <h2>{name}</h2>
            <div>
                <button onClick={() => dispatch({type: 'DEL_TODO', payload: {id}})}>Delete</button>
            </div>
        </div>
    );
};

export {ToDoListItem};