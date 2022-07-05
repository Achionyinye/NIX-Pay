import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Transfer from "./components/Transfer/Transfer";
import AddNewAcc from "./components/AddNewAccount/AddNewAcc";
import Dashboard from "./components/Dashboard/Dashboard";
import Accdetails from "./components/Accdetails/Accdetails";
import StatementOfAccount from "./components/StatementOfAccount/StatementOfAccount";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Auth/protectedRoute";
import { AuthProvider } from "./components/Auth/useAuth";
import UserContextP from "./Context/userContext";

function App() {
  return (
    <Routes>
      <Route path="/logout" element={<Signup />} />
      <Route path="/login" element={<Home />} />
      <Route path="/add-new-account" element={<AddNewAcc />} />
      <Route
        path="/customer-dashboard"
        element={
          <AuthProvider>
            <Dashboard />
          </AuthProvider>
        }
      />
      <Route
        path="/account-details"
        element={
          <AuthProvider>
            <Accdetails />
          </AuthProvider>
        }
      />
      <Route
        path="/transfer"
        element={
          <AuthProvider>
            <Transfer />
          </AuthProvider>
        }
      />
      <Route
        path="/statement-of-account"
        element={
          <AuthProvider>
            <StatementOfAccount />
          </AuthProvider>
        }
      />
      {/* <Route path="/api/auth/verify-email" element={<VerifyPage />} /> */}
    </Routes>
  );
}
export default App;
