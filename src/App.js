import React from "react";
import HeadBar from "./Components/head";
import Group from "./Components/group";
import NavBar from "./Components/navbar";
import All from "./Components/all";
import Article from "./Components/article";
import Education from "./Components/education";
import Event from "./Components/event";
import Job from "./Components/job";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/signup";
function App() {
  return (
    <div className="App">
      <HeadBar />
      <Group />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route exact path="/article" element={<Article />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/job" element={<Job />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
