
import React, {FC, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from "../UI/main/main";
import About from "../UI/about/about";
import UserAuthorized from "../../auth/UserAuthorized";
import RequireAuth from "../../auth/RequireAuth";

import './App.css';
import Calendar from "../UI/calendar/calendar";

const App: FC = () => {

    return (
        <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/calendar" element={<Calendar />} />

      </Routes>
        </Router>
  );
}

export default App;
