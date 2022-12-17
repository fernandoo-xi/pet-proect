import React, {FC} from 'react';

import Main from "../UI/main/main";
import './App.css';
import About from "../UI/about/about";

const App: FC = () => {
  return (
      <div className="container-fluid">
          <div className="background">
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
          </div>

          <Main />
          <About />
      </div>
  );
}

export default App;
