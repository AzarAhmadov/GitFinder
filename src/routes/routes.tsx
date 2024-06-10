import { createBrowserRouter } from "react-router-dom";
import Page404 from "../components/Page404/Page404";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import App from "../App";

const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <Page404 />,
        children: [
            {
                path: "/",
                element: <HomeScreen />,
            },
        ],
    },
])

export default router