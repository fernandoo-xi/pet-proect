
import React, {FC, useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Main from "../UI/main/main";
import About from "../UI/about/about";
import UserAuthorized from "../../auth/UserAuthorized";
import RequireAuth from "../../auth/RequireAuth";

import './App.css';
import Calendar from "../UI/calendar/calendar";
import SignIn from "../../pages/sign-in/sign-in";
import SignUp from "../../pages/sign-up/sign-up";

const App: FC = () => {



    return (
        <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />


      </Routes>
        </Router>
  );
}

export default App;
