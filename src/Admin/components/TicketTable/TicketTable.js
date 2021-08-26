import React from 'react';

import { Table } from "react-bootstrap";



function TicketTable() {
  return (
    <div>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Date</th>
      <th>Status</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark asdada</td>
      <td>Otto asasd</td>
      <td>Answered</td>
      <td>Show Details</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob asdadafd</td>
      <td>Thornton 22333</td>
      <td>Waiting</td>
      <td>Show Details</td>
    </tr>

  </tbody>
</Table>
    </div>
  )
}

export default TicketTable
