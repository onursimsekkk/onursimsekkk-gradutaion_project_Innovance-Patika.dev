import { Modal, Button } from "react-bootstrap";
import check from "../../../check.png";
import "./index.css";

export const SuccessComplaint = ({ successTicketId, closePopup }) => {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Success Create Complaint</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center">
        <img src={check} alt="check" className="check" />
        <p className="mt-2 ticketId">Ticket Id: {successTicketId}</p>
        <p className="mt-1 text-danger">Save it! You can use this Id for track your ticket later.</p>
        
      </Modal.Body>
      <Modal.Footer>
        <Button className="danger" onClick={closePopup}>
          Close
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};