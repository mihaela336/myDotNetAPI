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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },

            { path: "search", element: <ProtectedRoute><SearchPage /> </ProtectedRoute>},
            { path: "chargingSession", element: <ProtectedRoute><ChargingSessionPage /> </ProtectedRoute>},
            {
                path: "station/:ticker",
                element: <ProtectedRoute><StationPage /></ProtectedRoute>,
                children: [

                    { path: "", element: <HomePage /> },
                    { path: "chargingSessions", element: <ChargingSessions /> },
                    { path: "transactions", element: <Transactions /> },
                ]
            },

            { path: "transaction", element: <ProtectedRoute><TransactionPage /></ProtectedRoute> },
            { path: "user", element:<ProtectedRoute> <UserPage /> </ProtectedRoute>},
            { path: "paymentPlan", element: <ProtectedRoute><PaymentPlanPage /> </ProtectedRoute>},
            { path: "designGuide", element: <ProtectedRoute><DesignPage /></ProtectedRoute> },

        ]

    }
])