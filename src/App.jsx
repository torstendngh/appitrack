import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Applications from "./pages/Applications/Applications";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Navigate to="/applications" replace={true} />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/calendar" element={<Applications />} />
        <Route path="/sessions" element={<Applications />} />
        <Route path="/settings" element={<Applications />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;