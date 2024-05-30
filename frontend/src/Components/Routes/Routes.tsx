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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "login", element: <LoginPage /> },
            { path: "search", element: <SearchPage /> },
            { path: "chargingSession", element: <ChargingSessionPage /> },
            {
                path: "station/:ticker",
                element: <StationPage />,
                children: [

                    { path: "", element: <HomePage /> },
                    { path: "chargingSessions", element: <ChargingSessions /> },
                    { path: "transactions", element: <Transactions /> },
                ]
            },

            { path: "transaction", element: <TransactionPage /> },
            { path: "user", element: <UserPage /> },
            { path: "paymentPlan", element: <PaymentPlanPage /> },
            { path: "designGuide", element: <DesignPage /> },

        ]

    }
])