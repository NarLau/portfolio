import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Hero } from "./components/Layout/Hero";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<NotFound/>,
        children:[
            {
                path:"/home",
                element:<Home/>
            },{
                path:"/about",
                element:<About/>
            }

        ]
        
    }
])