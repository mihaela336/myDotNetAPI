import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import ChargingSessionPage from "../Pages/ChargingSessionPage/ChargingSessionPage";
import StationPage from "../Pages/StationPage/StationPage";
import TransactionPage from "../Pages/TransactionPage/TransactionPage";
import UserPage from "../Pages/UserPage/UserPage";
import PaymentPlanPage from "../Pages/PaymentPlanPage/PaymentPlanPage";
import Transactions from "../Transactions/Transactions";
import ChargingSessions from "../ChargingSessions/ChargingSessions";
import DesignPage from "../Pages/DesignPage/DesignPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import UserDashboard from "../UserDashboard/UserDashboard";
import UserList from "../UserList/UserList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },

            { path: "search", element: <ProtectedRoute><SearchPage /> </ProtectedRoute> },
            { path: "chargingSessions", element: <ProtectedRoute><ChargingSessionPage /> </ProtectedRoute> },
            {
                path: "station/:ticker",
                element: <ProtectedRoute><StationPage /></ProtectedRoute>,
                children: [

                    { path: "", element: <HomePage /> },
                    { path: "chargingSessions", element: <ChargingSessions /> },
                    { path: "transactions", element: <Transactions /> },
                ]
            },

            { path: "transactions", element: <ProtectedRoute><TransactionPage /></ProtectedRoute> },
            {
                path: "users",
                element: <ProtectedRoute> <UserPage /> </ProtectedRoute>,
                children: [

                    { path: "", element: <UserList /> },
                    { path: "seeUsers", element: <ChargingSessions /> },
                    { path: "transactions", element: <Transactions /> },
                ]

            },
            { path: "paymentPlans", element: <ProtectedRoute><PaymentPlanPage /> </ProtectedRoute> },
            { path: "designGuide", element: <ProtectedRoute><DesignPage /></ProtectedRoute> },

        ]

    }
])