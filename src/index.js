import React from 'react';
import ReactDOM from 'react-dom/client';
import router from "./Router";
import {RouterProvider} from "react-router-dom";
import {store} from './store/store';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import SignUpForm from "./components/auth/SignUp";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <SignUpForm/>
            <div className="container">
                
                <RouterProvider router={router}/>
            </div>
        </Provider>
    </React.StrictMode>
);

