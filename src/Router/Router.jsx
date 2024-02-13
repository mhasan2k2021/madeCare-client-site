import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Appointment from "../page/Appointment/Appointment";
import SingUp from "../page/SingUp/SingUp";
import SingIn from "../page/SingIn/SingIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyAppointment from "../page/MyAppointment/MyAppointment";
import UpdateAppointment from "../page/UpdateAppointment/UpdateAppointment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        ),
        loader: () => fetch("https://made-care-server.vercel.app/appointment"),
      },
      {
        path: "/sign-up",
        element: <SingUp></SingUp>,
      },
      {
        path: "/sign-in",
        element: <SingIn></SingIn>,
      },
      {
        path: "my-appointment",
        element: (
          <PrivateRoute>
            <MyAppointment></MyAppointment>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-appointment/:id",
        element: (
          <PrivateRoute>
            <UpdateAppointment></UpdateAppointment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://made-care-server.vercel.app/my-appointment/${params.id}`
          ),
      },
    ],
  },
]);
