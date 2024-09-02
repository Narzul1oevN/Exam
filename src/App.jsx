import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import News from './pages/News';
import ProccesDetalis from './pages/ProccesDetalis';
import Career from './pages/Career';
import OurStory from './pages/OurStory';
import Service from './pages/Service';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";


const App = () => {

      const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "proccesDetalis",
          element: <ProccesDetalis />,
        },
        {
          path: "career",
          element: <Career />,
        },
        {
          path: "ourStory",
          element: <OurStory />,
        },
        {
          path: "service",
          element: <Service />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App



// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Layout from "./layout/Layout";

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <Organic />,
//         },
//         {
//           path: "about",
//           element: <About />,
//         },
//         {
//           path: "shop",
//           element: <Shop />,
//         },
//         {
//           path: "shopSingle",
//           element: <ShopSingle />,
//         },
//         {
//           path: "portfolio",
//           element: <Portfolio />,
//         },
//         {
//           path: "team",
//           element: <Team />,
//         },
//         {
//           path: "page404",
//           element: <Page404 />,
//         },
//         {
//           path: "service",
//           element: <Service />,
//         },
//       ],
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default App;
