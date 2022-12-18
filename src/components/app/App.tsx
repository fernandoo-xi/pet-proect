
import React, {FC, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from "../UI/main/main";
import About from "../UI/about/about";
import UserAuthorized from "../../auth/UserAuthorized";
import RequireAuth from "../../auth/RequireAuth";

import './App.css';

const App: FC = () => {

    return (
        <Router>
      <Routes>
          <Route path="/" element={<Main />} />

      </Routes>
        </Router>
  );
}

export default App;
