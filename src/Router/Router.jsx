import { Component } from "react"
import {
    createBrowserRouter
} from "react-router"
import RootLayout from "../layouts/RootLayout/RootLayout"

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout
    }
])