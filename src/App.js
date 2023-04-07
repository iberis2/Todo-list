import { useEffect, useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./Pages/Homepage";
import Calendar from "./Pages/Calendar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./Pages/Weather";

function App() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => setToDoList(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <BrowserRouter>
      <div id="App">
        <div id="container">
          <Routes>
            <Route
              path="/"
              element={
                <Homepage toDoList={toDoList} setToDoList={setToDoList} />
              }
            />
            <Route path="weather" element={<Weather />} />
            <Route path="calendar" element={<Calendar />} />
          </Routes>
          <div id="footer">To Do List BY-SH</div>
        </div>
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
