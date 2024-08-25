import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Article from "./pages/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article000001 from "./pages/Article000001";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Article000001 />} />
          <Route
            path="how-i-deployed-my-app-on-gh-pages"
            element={<Article000001 />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
