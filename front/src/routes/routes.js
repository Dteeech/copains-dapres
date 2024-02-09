// import Error404 from "../components/Error404"
import Home from "../pages/Home"
import Register from "../pages/Register"



const routes = [
    { path: "/", component: <Home /> },
    {path: "/create-account", component: <Register />},
    // { path: "*", component: <Error404 /> },
]

export default routes
