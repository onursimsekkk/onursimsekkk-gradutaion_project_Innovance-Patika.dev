import { useEffect, useState, useMemo } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore/lite";
import { useTable } from "react-table";
import "./index.css";
import { TicketDetail } from "../TicketDetail";

export const Tickets = () => {
  const [{ data, detailModal, ticketDetail }, setState] = useState({
    data: [],
    detailModal: false,
    ticketDetail: undefined,
  });

  const getTickets = async () => {
    const db = getFirestore();
    const collections = collection(db, "tickets");
    const ticketsDocs = await getDocs(collections);

    const tickets = ticketsDocs.docs.map((doc) => doc.data());

    if (tickets) {
      setState((state) => ({ ...state, data: tickets }));
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "User Id",
        accessor: "user_id",
      },

      {
        Header: "Status",
        accessor: "status",
        Cell: (row) => {
          return row.value ? "true" : "false";
        },
      },
      {
        Header: "Ticket Id",
        accessor: "ticket_id",
        Cell: (row) => {
          return <div className="ticket-id-div">{row.value}</div>;
        },
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  if (!data) {
    return <div>Loading...</div>;
  }

  const rowClick = (row) => {
    setState((state) => ({
      ...state,
      detailModal: true,
      ticketDetail: row.original,
    }));
  };

  const saveAnswer = async (answer) => {
    const db = await getFirestore();
    const newRef = doc(db, "tickets", ticketDetail.ticket_id);
    try {
      await updateDoc(newRef, {
        status: true,
        answer: answer,
      });
      setState((state) => ({
        ...state,
        detailModal: false,
        ticketDetail: undefined,
      }));
      getTickets();
    } catch (e) {
      console.error("Error update:", e);
    }
  };

  const closePopup = () => {
    setState((state) => ({
      ...state,
      detailModal: false,
      ticketDetail: undefined,
    }));
  };

  return (
    // apply the table props
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td
                          {...cell.getCellProps()}
                          onClick={() => rowClick(row)}
                        >
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      {detailModal && (
        <TicketDetail
          closePopup={closePopup}
          ticketDetail={ticketDetail}
          saveAnswer={saveAnswer}
        />
      )}
    </div>
  );
};
