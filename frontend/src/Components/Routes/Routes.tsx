import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import ChargingSessionPage from "../Pages/ChargingSessionPage/ChargingSessionPage";
import StationPage from "../Pages/StationPage/StationPage";
import TransactionPage from "../Pages/TransactionPage/TransactionPage";
import UserPage from "../Pages/UserPage/UserPage";
import PaymentPlanPage from "../Pages/PaymentPlanPage/PaymentPlanPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            { path: "", element: <HomePage/>},
            { path: "search", element: <SearchPage/>},
            { path: "chargingSession", element: <ChargingSessionPage/>},
            { path: "station/:ticker", element: <StationPage/>},
            { path: "transaction", element: <TransactionPage/>},
            { path: "user", element: <UserPage/>},
            { path: "paymentPlan", element: <PaymentPlanPage/>},
        ]
    }
])