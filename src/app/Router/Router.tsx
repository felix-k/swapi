import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Layout, ErrorPage, PeoplePage, PersonPage } from "@/pages";
import { ERROR_ROUTE, PEOPLE_ROUTE, PERSON_ROUTE } from "./constants";

const router = createBrowserRouter([
  {
    path: PEOPLE_ROUTE,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PeoplePage />,
      },
      {
        path: PERSON_ROUTE,
        element: <PersonPage />,
      },
    ],
  },
  {
    path: ERROR_ROUTE,
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <Navigate to={PEOPLE_ROUTE} replace />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
