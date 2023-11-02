import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import { useState } from "react";
import Note from "./pages/Note";
import Search from "./pages/Search";

function App() {
  const [items, setItems] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home items={items} setItems={setItems} />} />
        <Route
          path="home"
          element={<Home items={items} setItems={setItems} />}
        />
        <Route
          path="/add"
          element={<AddNote items={items} setItems={setItems} />}
        />
        <Route
          path="/note"
          element={<Note items={items} setItems={setItems} />}
        />
        <Route path="/search" element={<Search items={items} />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
