import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Applications from "./pages/Applications/Applications";

const App = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Applications />} />
    </Routes>
  );
};

export default App;