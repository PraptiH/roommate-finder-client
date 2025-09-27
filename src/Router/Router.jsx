import { Component } from "react"
import {
    createBrowserRouter
} from "react-router"
import RootLayout from "../layouts/RootLayout/RootLayout"
import Home from "../pages/Home/Home"
import SignUp from "../pages/SignUp/SignUp"
import SignIn from "../pages/SignIn/SignIn"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
import FindRoommate from "../pages/FindRoommate/FindRoommate"
import BrowseListing from "../pages/BrowseListing/BrowseListing"
import MyListing from "../pages/MyListing/MyListing"
import PostDetails from "../pages/PostDetails/PostDetails"

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/home',
                Component: Home
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/signin',
                Component: SignIn
            },
            {
                path: '/browseListing',
                loader: () => fetch(`http://localhost:3000/posts`),
                Component: BrowseListing
            },
            {
                path: '/findRoommate',
                element: <PrivateRoute><FindRoommate /></PrivateRoute>
            },
            {
                path: '/myListing',
                element: <PrivateRoute><MyListing /></PrivateRoute>
            },
            {
                path: '/posts/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/posts/${params.id}`),
                element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>
            },

        ]
    }
])