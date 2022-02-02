import './Form.css';

const Form = ({dispatch}) => {

    function submit(e) {
        e.preventDefault()
        e.target.reset()
    }

    function saveCat(e) {
        let catInput = e.target.parentElement[0].value;
        dispatch({
            type: 'ADD_CAT',
            payload: {cat: catInput}
        })
    }

    function saveDog(e) {
        let dogInput = e.target.parentElement[0].value
        dispatch({
            type: 'ADD_DOG',
            payload: {dog: dogInput}
        })
    }

    return (
        <div className='pets_forms'>
            <div>
                <form onSubmit={submit}>
                    <lable>Add Cat:
                        <input
                            type="text"
                            name='cat'
                        />
                    </lable>
                    <button onClick={saveCat}>Save</button>
                </form>
            </div>
            <div>
                <form onSubmit={submit}>
                    <lable>Add Dog:
                        <input
                            type="text"
                            name='dog'
                        />
                    </lable>
                    <button onClick={saveDog}>Save</button>
                </form>
            </div>
        </div>
    );
};

export {Form};