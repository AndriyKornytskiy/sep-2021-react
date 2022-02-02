import './Form.css'

const Form = ({dispatch}) => {

    function submit(e) {
        e.preventDefault()
        e.target.reset()
    }

    function save(e) {
        dispatch({
            type: 'ADD_TODO',
            payload: e.target.parentElement[0].value
        })
    }

    return (
        <form className='form' onSubmit={submit} >
            <lable>To Do: <input name="toDo" type="text"/></lable>
            <button onClick={save}>Save</button>
        </form>
    );
};

export {Form};