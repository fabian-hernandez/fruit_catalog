import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./Components/Overview";
import ShowForm from "./Components/ShowForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />}/>
        <Route path="/add" element={<ShowForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;