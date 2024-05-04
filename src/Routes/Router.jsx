import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import CaseStudies from "../Pages/CaseStudies";
import WhyUs from "../Pages/WhyUs";
import Testimonial from "../Pages/Testimonial";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <h1>Error</h1>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/services",
            element: <Services></Services>,
          },
          {
            path: "/caseStudies",
            element: <CaseStudies></CaseStudies>,
          },
          {
            path: "/why",
            element: <WhyUs></WhyUs>,
          },
          {
            path: "/testimonial",
            element: <Testimonial></Testimonial>,
          }
        ]}
  ]);

  export default router;