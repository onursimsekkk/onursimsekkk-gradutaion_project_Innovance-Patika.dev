import './App.css';
// Import Pages
import ComplaintForm from './Complaints/pages/ComplaintForm';
import SearchComplaint from './Complaints/pages/SearchComplaint';
import LoginAdmin from './Admin/pages/LoginAdmin';
import TicketList from './Admin/pages/TicketList';
import AdminPage from './Admin/pages/AdminPage';

function App() {
  return (
    <div className="App">
      <AdminPage />
      {/* <ComplaintForm /> */}
      {/* <SearchComplaint /> */}
      {/* <LoginAdmin /> */}
      {/* <TicketList /> */}
    </div>
  );
}

export default App;
