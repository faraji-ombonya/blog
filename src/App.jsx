import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Article from "./pages/Article";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Article000001 from "./pages/Article000001";
import Article000002 from "./pages/Article000002";
import Article000003 from "./pages/Article000003";
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path=":slug" element={<ArticleDetail />} />
          {/* <Route
            path="how-i-built-a-library-search-engine-powered-by-vector-search"
            element={<Article000002 />}
          />
          <Route
            path="how-to-train-a-word2vec-model"
            element={<Article000003 />}
          /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
