import React from 'react'
import './style.css';
// Import Components
import Title from '../../components/Title';
import Input from '../../components/Input';
// Import React-Bootstrap Components

// Sonra bakacağım font-awesome için !!
// import { faUser } from '@fortawesome/react-fontawesome'

function SearchComplaint() {
  return (
    <div className="search-page">
      <div className=" search-container medium">
         <Title type="h1" text="Track your complaint!" className="darkblue" />
         <div className="search-box mt-5">
            <Input type="text" 
                placeholder="Search..." 
                name="search"
                className="no-outline medium"
            />
            <button className="search-btn mt-2">Search</button>
         </div>
         
      </div>
    </div>
  )
}

export default SearchComplaint
