import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//PAGES
//private pages
import UserPortal from "./component/userPortal";
import Dashboard from "./pages/dashboard";
import Portal from "./pages/portal";
import Task from "./pages/task";
import Subscriptions from "./pages/subscriptions";
import Premium from "./pages/premium";

//Public
import Login from "./pages/login";
import Signup from "./pages/signup";
//ROUTES

//AUth
import RequireAuth from "./auth/requireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<h1>Error Page</h1>} />
      <Route element={<RequireAuth />}>
        <Route element={<UserPortal />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/subscription" element={<Subscriptions />} />
          <Route path="/premium" element={<Premium />} />
        </Route>
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
