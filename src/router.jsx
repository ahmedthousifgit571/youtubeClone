import { createBrowserRouter } from "react-router-dom"
import Body from "./components/Body"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"


const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body />,
    children:[
      {
        path:"/",
        element: <MainContainer />
      },
      {
        path:"/watch",
        element :<WatchPage />
      }
    ]
}])

export default appRouter