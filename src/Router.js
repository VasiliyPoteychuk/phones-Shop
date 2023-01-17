import {
    createBrowserRouter,
} from "react-router-dom";

import Products from "./components/products/Index";
import Product from "./components/products/Product";

export default createBrowserRouter([
    {
        path: "/",

        element: <Products/>,
    },
    {
        path: "/products",

        element: <Products/>,
    },
    {
        path: "/products/:id",

        element: <Product/>,
    },
]);
