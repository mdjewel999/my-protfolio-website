import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import MySkills from "../Pages/Home/MySkills/MySkills";
import Resome from "../Pages/Resome/Resome";
import PersonalInfo from "../LayOut/PersonalInfo";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Home/Projects/Projects";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
       
      ]
    },
    {
      path:"/",
      element:<PersonalInfo></PersonalInfo>,
      children:[
        {
          path:'myskills',
          element:<MySkills></MySkills>
        },
        {
          path:'resome',
          element:<Resome></Resome>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'protfolio',
          element:<Projects></Projects>
        }
      ]
    }

  ]);