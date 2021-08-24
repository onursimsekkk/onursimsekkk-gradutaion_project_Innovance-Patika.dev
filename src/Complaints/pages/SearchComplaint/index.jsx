import React from 'react'
// Import Components
import Title from '../../components/Title';
import Input from '../../components/Input';
// Import React-Bootstrap Components
import Button from 'react-bootstrap/Button';
// Sonra bakacağım font-awesome için !!
// import { faUser } from '@fortawesome/react-fontawesome'

function SearchComplaint() {
  return (
    <div style={{marginTop: "100px"}}>
      <div className="container bg-secondary">
         <Title type="h1" text="Search your complaint!" className="text-" />
         <div className="search-box mt-5">
           <Input type="text" 
                placeholder="Search..." 
                name="search"
         />
         <Button>Search</Button>
         </div>
         
      </div>
    </div>
  )
}

export default SearchComplaint
