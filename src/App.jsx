import "./App.css";
import Landing from "./pages/Landing";
import ArticleDetail from "./pages/ArticleDetail";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path=":slug" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
