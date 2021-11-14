import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/foundation/base.scss";
import "./styles/foundation/reset.scss";

import { Top } from "./pages/top";
import { Characters } from "./pages/characters";

const base = "/trpg_10th/";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`${base}`} element={<Top />} />
          <Route path={`${base}characters/`} element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
