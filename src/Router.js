import {
    createBrowserRouter,
} from "react-router-dom";

import Products from "./components/products/Index";
import View from "./components/product/View";

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
        element: <View/>,
    }

]);
