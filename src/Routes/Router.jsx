import {createBrowserRouter} from "react-router";
import { Roots } from "../LayOuts/Roots/Roots";
import Home from "../Pages/Home";
import { Newscategory } from "../Pages/Newscategory";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Auth from "../LayOuts/Auth/Auth";
import NewsDetail from "../Pages/NewsDetail";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Component/Loading/Loading";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Roots,
      children:[
        {
            path:"/",
            Component:Home
        },
        {
            path:"/newscategory/:id",
            Component: Newscategory,
            loader: ()=> fetch('/news.json'),
            hydrateFallbackElement:<Loading></Loading>
        },
      ],
    },
    {
      path: "/auth",
      element:<Auth></Auth>,
      children:[
        {
          path:"/auth/login",
          element:<Login></Login>
        },
        {
          path:"/auth/register",
          element:<Register></Register>
        },
      ]
    },
    {
      path: "/newsdetail/:id",
      element:<PrivateRoute><NewsDetail></NewsDetail></PrivateRoute>,
      loader: ()=> fetch('/news.json'),
      hydrateFallbackElement:<Loading></Loading>
    },
    {
      path: "/*",
      element: <div>error 404</div>,
    },
  ]);