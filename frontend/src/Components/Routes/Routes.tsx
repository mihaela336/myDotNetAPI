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
import AddUserForm from "../UserAdd/AddUserForm";
import EditUser from "../EditUser/EditUser";
import UserDetalis from "../UserDetails/UserDetalis";
import ChargingSessionEdit from "../ChargingSessionEddit/EditChargingSession";
import ChargingSessionAdd from "../ChargingSessionAdd/ChargingSessionAdd";
import TransactionList from "../TransactionList/TransactionList";
import TransactionAdd from "../TransactionAdd/TransactionAdd";
import TransactionEdit from "../TransactionEdit/TransactionEdit";
import ChargingSessionDetails from "../ChargingSessionDetails/ChargingsSessionDetails";
import TransactionDetails from "../TransactionDetails/TransactionDetails";
import PaymentPlanAdd from "../PaymentPlanAdd/PaymentPlanAdd";
import PaymentPlanList from "../PaymentPlanList/PaymentPlanList";
import PaymentPlanEdit from "../PaymentPlanEdit/PaymentPlanEdit";
import PaymentPlanDetails from "../PaymentPlanDetails/PaymentPlanDetails";
import VehiclePage from "../Pages/VehiclePage/VehiclePage";
import VehicleList from "../VehicleList/VehicleList";
import VehicleAdd from "../VehicleAdd/VehicleAdd";
import VehicleEdit from "../VehicleEdit/VehicleEdit";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import ChargingSessionList from "../ChargingSessionList/ChargingSessionList";
import StationList from "../StationList/StationList";
import StationEdit from "../StationEdit/StationEdit";
import StationAdd from "../StationAdd/StationAdd";
import StationDetails from "../StationDetails/StationDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },

            { path: "search", element: <ProtectedRoute><SearchPage /> </ProtectedRoute> },
            { 
                path: "chargingSession",
                 element: <ProtectedRoute><ChargingSessionPage /> </ProtectedRoute> ,
                 children: [

                    { path: "", element: <ChargingSessionList /> },
                    { path: "add", element: <ChargingSessionAdd /> },
                    { path: "update", element: <ChargingSessionEdit /> },
                    { path: "details", element: <ChargingSessionDetails /> },
                ]
                },
            {
                path: "station",
                element: <ProtectedRoute><StationPage /></ProtectedRoute>,
                children: [
                    { path: "", element: <StationList /> },
                    { path: "add", element: <StationAdd /> },
                    { path: "update", element: <StationEdit /> },
                    { path: "details", element: <StationDetails /> },

                    { path: "", element: <HomePage /> },
                    { path: "chargingSessions", element: <ChargingSessions /> },
                    { path: "transactions", element: <Transactions /> },
                ]
            },

            {
                 path: "transaction",
                  element: 
                  <ProtectedRoute><TransactionPage /></ProtectedRoute> ,
                  children: [
 
                     { path: "", element: <TransactionList /> },
                     { path: "add", element: <TransactionAdd /> },
                     { path: "update", element: <TransactionEdit /> },
                     { path: "details", element: <TransactionDetails /> },
                 ]
                
                },
            {
                path: "user/",
                element: <ProtectedRoute> <UserPage /> </ProtectedRoute>,
                children: [

                    { path: "", element: <UserList /> },
                    { path: "add", element: <AddUserForm /> },
                    { path: "update", element: <EditUser /> },
                    { path: "details", element: <UserDetalis /> },
                ]

            },
            { 
                path: "paymentPlan",
                 element: <ProtectedRoute><PaymentPlanPage /> </ProtectedRoute>,
                 children: [

                    { path: "", element: <PaymentPlanList /> },
                    { path: "add", element: <PaymentPlanAdd /> },
                    { path: "update", element: <PaymentPlanEdit /> },
                    { path: "details", element: <PaymentPlanDetails /> },
                ]
                
                },
                { 
                    path: "vehicle",
                     element: <ProtectedRoute><VehiclePage /> </ProtectedRoute>,
                     children: [
    
                        { path: "", element: <VehicleList /> },
                        { path: "add", element: <VehicleAdd /> },
                        { path: "update", element: <VehicleEdit /> },
                        { path: "details", element: <VehicleDetails /> },
                    ]
                    
                    },
            { path: "designGuide", element: <ProtectedRoute><DesignPage /></ProtectedRoute> },

        ]

    }
])