import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from './layout/Layout'
import Organic from './pages/Organic'
import About from './pages/About'
import Shop from './pages/Shop'
import ShopSingle from './pages/ShopSingle'
import Portfolio from './pages/Portfolio'
import Team from './pages/Team'
import Page404 from './pages/Page404'
import Service from './pages/Service'

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Organic/>,
                },
                {
                    path: "about",
                    element: <About/>
                },
                {
                    path: "shop",
                    element: <Shop/>
                },
                {
                    path: "/shopSingle/:id",
                    element: <ShopSingle/>
                },
                {
                    path: "portfolio",
                    element: <Portfolio/>
                },
                {
                    path: "team",
                    element: <Team/>
                },
                {
                    path: "page404",
                    element: <Page404/>
                },
                {
                    path: "service",
                    element: <Service/>
                }
            ]
        }
    ])

  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
