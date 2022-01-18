import {useState} from "react";

export default function FormComponent({getFilteringData}) {

    const [formData, setFormData] = useState({name:'', username:'', email:''});


    function onChange(e) {
        const forma = ({...formData, [e.target.name]: e.target.value})
        setFormData(forma)
    }

    function find(e) {
        e.preventDefault()
        getFilteringData(formData)
    }

    return (
        <div>
            <form>
                <lable>Name: <input type="text" name={'name'} value={formData.name} onChange={onChange}/></lable>
                <lable>Username: <input type="text" name={'username'} value={formData.username} onChange={onChange}/></lable>
                <lable>Email: <input type="text" name={'email'} value={formData.email} onChange={onChange}/></lable>
                <button onClick={find}>Find</button>
            </form>
        </div>
    );
}