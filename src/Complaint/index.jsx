import { Switch, Route } from "react-router-dom";
import { CreateForm } from "./CreateForm";
import { SearchComplaint } from "./SearchComplaint";

const Complaint = () => {
  return (
    <>
      <Switch>
        <Route path="/complaint" component={CreateForm} />
        <Route path="/search-complaint" component={SearchComplaint} />
      </Switch>
    </>
  );
};

export default Complaint;