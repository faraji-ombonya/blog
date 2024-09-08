import "./App.css";
import Landing from "./pages/Landing";
import ArticleDetail from "./pages/ArticleDetail";
import ScrollToTop from "./components/ScrollToTop";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
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
