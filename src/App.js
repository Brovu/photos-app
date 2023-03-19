import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Main from "./features/Photo/pages/Main";
import Add from "./features/Photo/pages/Add";
import Edit from "./features/Photo/pages/Edit";

function App() {
  return (
    <div className="photo-app">
          <BrowserRouter>
           {/*  <ul>
              <li><Link to="/photos">Go to Photos page</Link></li>
              <li><Link to="/photos/add">Go to Add Photos page</Link></li>
              <li><Link to="/photos/edit">Go to Edit Photos page</Link></li>
            </ul> */}
            <Routes>
            <Route path="/" element={ <Navigate to="/photos" /> } />

              <Route path="/photos" element={<Main />} />
              <Route path="/photos/add" element={<Add />} />
              <Route path="/photos/edit" element={<Edit/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
