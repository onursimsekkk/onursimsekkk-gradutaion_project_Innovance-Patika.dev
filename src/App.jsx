import { useState } from "react";
import { useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
import Complaint from "./Complaint";
import { NavBar } from "./Navbar";
import { initializeApp } from "firebase/app";
import "firebase/firestore";

import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyBMG3zrIhN6vqAvftyBQ7gchXnreMWMIBc",
  authDomain: "ticket-app-2a565.firebaseapp.com",
  projectId: "ticket-app-2a565",
  storageBucket: "ticket-app-2a565.appspot.com",
  messagingSenderId: "333643158157",
  appId: "1:333643158157:web:167845cb6e1a2e9cd2c8c4",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  const [isLogin, setLogin] = useState(false);
  let history = useHistory();

  const login = () => {
    setLogin(true);
    history.push("/tickets");
  };

  const logOut = () => {
    setLogin(false);
    history.push("/login");
  };

  return (
    <>
      <NavBar logOut={logOut} isLogin={isLogin} />
      <Dashboard isLogin={isLogin} login={login} />
      <Complaint />
    </>
  );
};

export default App;
