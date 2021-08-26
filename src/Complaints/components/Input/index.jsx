import React from 'react';
import './style.css';


function Input({ type, placeholder, name, className, id, label }) {
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
      </div>
      
      <input 
        className={className} 
        type={type} 
        placeholder={placeholder} 
        name={name}
        id={id}
      />
    </>
  )
}

export default Input;
