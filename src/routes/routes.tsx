import { createBrowserRouter } from "react-router-dom";
import Page404 from "../components/Page404/Page404";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import Header from "../common/Header/Header";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
    errorElement: <Page404 />,
  },
]);

export default router;
