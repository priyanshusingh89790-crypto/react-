
import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Cart from "./components/Cart";
import RestarauntMenu from "./components/useRestarauntmenu";







const AppLayout = () => {
    return (
        <div className="app">
            <header>
                <Header/>
                <Outlet/>
            </header>
        </div>
    ) 
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,

    children: [
      {
        index: true,
        element: <Body/>
      },
      {path: "/home",
      element: <Body/>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "restaurant/:id",
        element: <RestarauntMenu/>
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);