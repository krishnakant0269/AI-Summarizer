/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  SignIn,
  Demo,
  SignUp,
  HomePage,

} from "./Components/index.js";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/login",
//         element: (
//           <AuthLayout authentication={false}>
//             <SignIn />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/signup",
//         element: (
//           <AuthLayout authentication={false}>
//             <SignUp />
//           </AuthLayout>
//         ),
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router}/> */}
      <App />
    </Provider>
  </React.StrictMode>
);
