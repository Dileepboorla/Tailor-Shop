import { useState } from 'react';
import axios from 'axios'

const Deletedata = () => {
    const [code, setCode] = useState('');

    const onChangeHandler = (e) => {
        setCode(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (code) {
            try {
                const url = `https://form-f623f-default-rtdb.firebaseio.com/form/${code}.json`;
                console.log(url.data);
                axios.delete(url);
                alert('Data deleted successfully!');
            } catch (error) {
                console.error('Error deleting data:', error);
                alert('Failed to delete data');
            }
        } else {
            alert('Please enter a code');
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <input 
                type='text' 
                value={code} 
                placeholder="Enter the code" 
                name='code' 
                onChange={onChangeHandler}
            />
            <button type="submit">SUBMIT</button>
        </form>
    );
};

export default Deletedata;
