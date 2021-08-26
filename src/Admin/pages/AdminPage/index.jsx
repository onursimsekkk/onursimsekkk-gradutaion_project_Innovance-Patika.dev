import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import LoginAdmin from "../LoginAdmin";
import TicketList from "../TicketList";

function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <AdminNavbar />
      {isLoggedIn ? <TicketList /> : <LoginAdmin />}
    </div>
  );
}

export default AdminPage;
