import './Cat.css'

const Cat = ({cat:{id, name}, dispatch}) => {
    return (
        <div className='oneCat'>
            <div>{name}</div>
            <button onClick={() => dispatch({type: 'DEL_CAT', payload: {id}})}>Delete</button>
        </div>
    );
};

export {Cat};