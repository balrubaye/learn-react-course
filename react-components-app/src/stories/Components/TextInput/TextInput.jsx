import { useState } from 'react';
import PropTypes from 'prop-types';
import "./TextInput.css";

// control component state is managed by react

const TextInput =  ({name, type,label, placeholder}) => {

    const [value, setValue] = useState('');
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }

    return (

        <div className='mb-4'>

            <label className = "block text-gray-700 text-sm font-bold mb-2" htmlFor={name}  >{label} :</label>
            <input 
                className = "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" 
                value={value} 
                onChange={handleOnChange}
                type={type} 
                pattern="[0-9]{5}"
                name={name} 
                placeholder={placeholder} />

        </div>

    )
}

TextInput.propTypes =  {
    /** 
     * name attribute 
     **/
    name : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    type : PropTypes.string,
    placeholder : PropTypes.string
}

export default TextInput;