import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

import UserDetail from "../../pages/users/UserDetail";
import UserForm from "../../pages/users/UserForm";
import UserList from "../../pages/users/UserList";
import ProductDetail from "../../pages/products/ProductDetail";
import ProductList from "../../pages/products/ProductList";
import Home from "../../pages/Home";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />}></Route>

            <Route path={routes.users} element={<UserList />}></Route>
            <Route path='/users/:id' element={<UserDetail />}></Route>
            <Route path={routes.createuser} element={<UserForm />}></Route>
            <Route path='/users/edit/:id' element={<UserForm />}></Route>

            <Route path={routes.products} element={<ProductList />}></Route>
            <Route path='/products/:id' element={<ProductDetail />}></Route>
        </Routes>
    )
};

export default AppRouter;