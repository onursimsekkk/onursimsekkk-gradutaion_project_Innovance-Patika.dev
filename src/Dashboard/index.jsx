import { Switch, Route } from "react-router-dom";
import { Login } from "./Login";
import { TicketDetail } from "./TicketDetail";
import { Tickets } from "./Tickets";

const Dashboard = ({ isLogin, login }) => {
  return (
    <>
      <Switch>
        {!isLogin ? (
          <Route path="/login">
            <Login login={login} />
          </Route>
        ) : (
          <>
            <Route path="/tickets" component={Tickets} />
            <Route path="/ticket-detail" component={TicketDetail} />
          </>
        )}
      </Switch>
    </>
  );
};

export default Dashboard;