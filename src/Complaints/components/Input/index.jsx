import React from 'react';
import './style.css';


function Input({ type, placeholder, name, classname, id, label }) {
  return (
    <div>
      <div>
        <label htmlFor={id}>{label}</label>
      </div>
      
      <input 
        className={classname} 
        type={type} 
        placeholder={placeholder} 
        name={name}
        id={id}
      />
    </div>
  )
}

export default Input;
