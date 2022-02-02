import './Dog.css'

const Dog = ({dog:{id, name}, dispatch}) => {
    return (
        <div className='oneDog'>
            <div>{name}</div>
            <button onClick={() => dispatch({type: 'DEL_DOG', payload: {id}})}>Delete</button>
        </div>
    );
};

export {Dog};