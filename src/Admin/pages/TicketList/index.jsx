import React from 'react'

import TicketTable from '../../components/TicketTable/TicketTable';
import { Container, Row, Col } from "react-bootstrap";

function TicketList() {
  return (
    <div style={{marginTop:"60px"}}>
      <Container >
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>  
    </Container>
    </div>
    
  )
}

export default TicketList;
