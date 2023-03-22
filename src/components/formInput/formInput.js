import React from 'react';
import './inputStyle.css'



export function FormInput(props) {
    const {fieldName, type, name, value, onChange, onKeyUp} = props
    return (
        <div className="input-container">
            <input 
                type={type}
                name={name}
                value={value} 
                // pattern={pattern}
                required={true}
                onChange={onChange}
                onKeyUp={onKeyUp}
                
            />
            <label className={value && 'filled'} htmlFor={name}>{fieldName}</label>
        </div>  
    );
}

export function SelectInput(props) {
    const {fieldName, name, value, onChange, onKeyUp, children} = props
    return (
        <div className="input-container">
            <select
                name={name}
                value={value} 
                onChange={onChange}
                onKeyUp={onKeyUp}
            >
                {children}
            </select>
            <label className={value && 'filled'} htmlFor={name}>{fieldName}</label>
        </div>  
    );
}





