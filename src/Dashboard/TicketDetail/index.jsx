import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

import "./index.css";

export const TicketDetail = ({ ticketDetail, closePopup, saveAnswer }) => {
  const [{ answerState }, setState] = useState({ answerState: "" });

  const answerArea = (e) => {
    setState((state) => ({ ...state, answerState: e.target.value }));
  };

  return (
    <Modal.Dialog className="shadow">
      <Modal.Header>
        <Modal.Title className="darkblue">Complaint Details</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-left">
        <p className="mt-2"><span className="text-danger">Ticket Id:</span> {ticketDetail.ticket_id}</p>
        <p className="mt-2"><span className="text-danger">First Name:</span> {ticketDetail.first_name}<span className="text-danger"> Last Name:</span> {ticketDetail.last_name}</p>
        <p className="mt-2"><span className="text-danger">Age:</span> {ticketDetail.age}</p>
        <p className="mt-2"><span className="text-danger">ID No:</span> {ticketDetail.user_id}</p>
        <p className="mt-2"><span className="text-danger">Date:</span> {ticketDetail.date}</p>
        <p className="mt-2"><span className="text-danger">Ticket:</span> {ticketDetail.details}</p>
        <p className="mt-2 darkblue">
          Status: <span className={ticketDetail.status ? "text-success" : "text-danger"}>{ticketDetail.status ? "Answered" : "Not Answered"}</span>
        </p>

        {ticketDetail.answer && (
          <p className="mt-2"><span className="text-danger">Answer:</span> {ticketDetail.answer}</p>
        )}

        {!ticketDetail.answer && (
          <textarea
            placeholder="Please answer..."
            onChange={(e) => answerArea(e)}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-danger" onClick={closePopup}>
          Close
        </Button>
        {!ticketDetail.answer && (
          <Button
            className="btn btn-primary"
            onClick={() => saveAnswer(answerState)}
          >
            Save
          </Button>
        )}
      </Modal.Footer>
    </Modal.Dialog>
  );
};
