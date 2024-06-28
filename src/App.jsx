import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Applications from "./pages/Applications/Applications";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Calendar from "./pages/Calendar/Calendar";
import Sessions from "./pages/Sessions/Sessions";
import Settings from "./pages/Settings/Settings";

const App = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
        <Route index element={<Navigate to="/applications" replace={true} />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/sessions" element={<Sessions/>} />
        <Route path="/settings" element={<Settings/>} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;