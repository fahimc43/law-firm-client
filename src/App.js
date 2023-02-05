import { Routes, Route } from "react-router-dom";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import Navbar from "./pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import MyReview from "./pages/Dashboard/MyReview";
import AllUsers from "./pages/Dashboard/AllUsers";
import RequireAdmin from "./pages/Login/RequireAdmin";
import AddServices from "./pages/Dashboard/AddServices";
import ManageService from "./pages/Dashboard/ManageService";
import Payment from "./pages/Dashboard/Payment/Payment";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="review" element={<MyReview />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          />
          <Route
            path="services"
            element={
              <RequireAdmin>
                <AddServices />
              </RequireAdmin>
            }
          />
          <Route
            path="manageService"
            element={
              <RequireAdmin>
                <ManageService />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
