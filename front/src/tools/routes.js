// import Error404 from "../components/Error404"
import Home from "../components/Home"
import Register from "../components/Register"



const routes = [
    { path: "/", component: <Home /> },
    {path: "/create-account", component: <Register />},
    // { path: "*", component: <Error404 /> },
]

export default routes
