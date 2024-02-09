import { Route, Routes } from "react-router-dom";
import routes from './routes.js';

const Router = () => {
    return (
        <Routes>
            {routes.map(({ path, component }, i) => (
                <Route key={i} path={path} element={component} />
            ))}
        </Routes>
    );
}

export default Router;
