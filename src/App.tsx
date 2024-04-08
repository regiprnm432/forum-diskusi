import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import Discussion from "./components/custom/Discussion";
import ThreadList from "./components/custom/ThreadList";
import { DiscussionProvider } from "./DiscussionContext";

const Layout = () => {
  return (
    <div className="container text-left mx-auto p-4">
      {/* Judul "Forum Diskusi" */}
      <h1 className="text-4xl font-semibold mb-5">Forum Diskusi</h1>
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <DiscussionProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<ThreadList />} />
            <Route path="/discussion/:threadId" element={<Discussion />} />
          </Route>
        </Routes>
      </DiscussionProvider>
    </BrowserRouter>
  );
}

export default App;
