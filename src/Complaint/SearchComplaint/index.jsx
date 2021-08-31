import { useState } from "react";
import { Input } from "../../components";
import { Button, Modal } from "react-bootstrap";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "./index.css";

export const SearchComplaint = () => {
  const [{ searchState, isOpen, error, ticketDetail }, setState] = useState({
    searchState: "",
    isOpen: false,
    error: "",
    ticketDetail: {},
  });
  const search = (e) => {
    setState((state) => ({ ...state, searchState: e.target.value }));
  };

  const searchClick = async () => {
    const db = await getFirestore();

    const collections = collection(db, "tickets");
    const ticketsDocs = await getDocs(collections);
    const tickets = ticketsDocs.docs.map((doc) => doc.data());
    const ticket = tickets.find((item) => item.ticket_id === searchState);

    if (ticket) {
      setState((state) => ({ ...state, isOpen: true, ticketDetail: ticket }));
    } else {
      setState((state) => ({ ...state, error: "Ticket not found" }));
    }
  };

  const closePopup = () => {
    setState((state) => ({ ...state, isOpen: false, searchState: "" }));
  };

  return (
    <div className="search-container">
      <div className="search-input">
        <h1 className="mb-4">TRACK YOUR COMPLAINT</h1>
        <div className="d-flex justify-content-evenly">
          <Input placeholder="Search..." value={searchState} onChange={search} />
          <Button className="btn btn-md primary" onClick={searchClick} style={{height:"50px"}} >
          SEARCH
          </Button>
        </div>
        
        {error && <div className="error-div"> {error}</div>}
      </div>

      {isOpen && (
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Complaint Detail</Modal.Title>
          </Modal.Header>

          <Modal.Body className="text-center">
            <p className="mt-2">Ticket Id: {ticketDetail.ticket_id}</p>
            <p className="mt-2">First Name: {ticketDetail.first_name}</p>
            <p className="mt-2">Last Name: {ticketDetail.last_name}</p>
            <p className="mt-2">
              Status: {ticketDetail.status ? "Answered" : "Not Answered"}
            </p>

            {ticketDetail.answer && (
              <p className="mt-2">Answer: {ticketDetail.answer}</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button className="danger" onClick={closePopup}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </div>
  );
};