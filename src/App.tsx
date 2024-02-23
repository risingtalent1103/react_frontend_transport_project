import { FC } from "react";
import HomePage from "@/pages/Home/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import Project from "./pages/Home/Project";
import ProjectSingle from "./pages/Home/ProjectSingle";
import OurLatestNews from "./pages/Home/OurLatestNews";
import BlogSingle from "./pages/Home/BlogSingle";
import NotFoundPage from "./pages/NotFoundPage";
import ChangeLog from "./pages/ChangeLog";
import Protection from "./pages/Protection";
import Liecense from "./pages/Liecense";
import ServiceSingle from "./pages/Home/ServiceSingle";
import Contact from "./pages/Home/Contact";
import Pricing from "./pages/Home/Pricing";
import AboutUs from "./pages/Home/AboutUs";
import Service from "./pages/Home/Sevice";
import OurTeam from "./pages/Home/OurTeam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/aboutus",      
        element: <AboutUs />
      },
      {
        path: "/service/list",
        element: <Service/>,
      },
      {
          path: "/contact",
          element: <Contact/>
      },
      {
        path: "/service/detail",
        element: <ServiceSingle/>
      },
      {
        path: "/project/list",      
        element: <Project />
      },
      {
        path: "/project/detail/:id",
        element: <ProjectSingle/>
      },
      {
        path: "/news/list",
        element: <OurLatestNews/>
      },
      {
        path: "/news/detail/:id",
        element: <BlogSingle/>
      },
      {
        path: "/team",
        element: <OurTeam />
      },                 
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/changelog",
        element: <ChangeLog />
      },
      {
        path: "/license",
        element: <Liecense />
      },
      {
        path: "/protection",
        element: <Protection />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ],
  },
]);
const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
