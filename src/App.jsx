import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthProvider from "./auth/AuthContext";
import ChatScreen from "./pages/ChatScreen";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path='/' element={<ChatScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
