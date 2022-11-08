import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import Memories from "./components/Memories";
import Memory from "./components/Memory";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/memories/:id" element={<Memory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
