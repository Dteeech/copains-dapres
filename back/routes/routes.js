// routes/routes.js
import express from "express"
import createUserController from "../controllers/createUserController.js"

const router = express.Router();

const routesGET = [
    // { route: "/admin/allUsers", controller: allUsers },
    // { route: "/admin/allProducts", controller: allProducts },
    // { route: "/relogged", controller: checkToken }
]

const routesPOST = [
    { route: "/create-account", controller: createUserController },
]

const routesUPLOAD = [
    // ...
]

routesGET.map((item) => {
    router.get(item.route, item.controller);
})
routesPOST.map((item) => {
    router.post(item.route, item.controller);
})

routesUPLOAD.map((item) => {
    router.post(item.route, item.controller)
})

export default router;
