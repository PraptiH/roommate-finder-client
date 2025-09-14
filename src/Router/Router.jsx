import { Component } from "react"
import {
    createBrowserRouter
} from "react-router"
import RootLayout from "../layouts/RootLayout/RootLayout"
import Home from "../pages/Home/Home"
import SignUp from "../pages/SignUp/SignUp"
import SignIn from "../pages/SignIn/SignIn"

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children : [
            {
                index: true,
                path:'/home',
                Component:Home
            },
            {
                path:'/signup',
                Component:SignUp
            },
            {
                path:'/signin',
                Component:SignIn
            }
        ]
    }
])