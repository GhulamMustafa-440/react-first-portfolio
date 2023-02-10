import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Home from "../screens/Home";
  import About from "../screens/About";
  import Contact from "../screens/Contact";
  import Services from "../screens/Services";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
  ],
  );


  
export default function Router() {
    return (
         <RouterProvider router={router} />
    )
}