import {createBrowserRouter} from "react-router";
import { Roots } from "../LayOuts/Roots/Roots";
import Home from "../Pages/Home";
import { Newscategory } from "../Pages/Newscategory";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Roots,
      children:[
        {
            path:"",
            Component:Home
        },
        {
            path:"/newscategory/:id",
            Component: Newscategory,
            loader: ()=> fetch('/news.json'),
        },
      ],
    },
    {
      path: "/auth",
      element: <div>authentication layout</div>,
    },
    {
      path: "/news",
      element: <div>news layouts</div>,
    },
    {
      path: "/*",
      element: <div>error 404</div>,
    },
  ]);