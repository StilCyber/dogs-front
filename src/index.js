import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
// import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Main } from "./components/main"
import { ErrorPage } from "./components/pages/ErrorPage"
import { Profile } from "./components/pages/Profile"
import { Users } from "./components/pages/Users"
import { News } from "./components/pages/News"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { EditProfile } from "./components/pages/EditProfile"
import { FriendsList } from "./components/pages/FriendsList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/friends",
        element: <FriendsList />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/editProfile",
        element: <EditProfile />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
