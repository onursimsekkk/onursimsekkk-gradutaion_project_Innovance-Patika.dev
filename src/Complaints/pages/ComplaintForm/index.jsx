import React from 'react';
import './style.css';
// Import Components
import Input from '../../components/Input';
import Title from '../../components/Title';
// Import React-Bootstrap Components
// import Button from 'react-bootstrap/Button';

function ComplaintForm() {
  return (
    <div className="form-page text-center" style={{backgroundColor: "rgb(14, 146, 207)"}}>
      <div className="form container">
      <Title type="h2" text="Complaint Form" className="darkblue mt-3" />
      <form action="none">
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div className="small">
          <Input type="text" placeholder="Name..." name="name" label="Name:" id="name" className="big m-2 no-outline" />

          </div>
          <div className="small">
          <Input type="text" placeholder="Surname..." name="surname" label="Surname:" id="surname" className="big m-2 no-outline" />

          </div>
        </div>
        <Input type="text" placeholder="Age..." name="age" label="Your age:" id="age" className="small no-outline" />
        <Input type="text" placeholder="Adress..." name="adress" label="Your adress:" id="adress" className="medium no-outline" />
        <Input type="text" placeholder="ID No" name="tc" id="tc" label="Your ID No:" className="medium no-outline" />
        <Input type="date" name="date" label="Complaint's date:" id="date" className="medium no-outline" />
        <div>
          <Input type="file" name="file" className="file medium no-outline" label="Upload a picture:" id="upload" />
        </div>
        {/* <Input type="textarea" placeholder="Give us some details..." name="complaint" label="Complaint details:" id="detail" className="detail-text no-outline" /> */}
        <textarea name="" id="" cols="87" rows="8" placeholder="Details..." className="mt-1 no-outline text-area"></textarea>
        <div>
          <button type="submit" className="submit-btn mt-2">Submit</button>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default ComplaintForm;
