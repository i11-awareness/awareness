import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layouts/Layout";
// import Circle from "./components/Circle";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Resources from "./components/Resources";
import ErrorPage from "./pages/ErrorPage";
import ResourceContentDisplay from "./components/ResourceContentDisplay";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<AboutUs />} />
      <Route path="resources" element={<Resources />} />
      <Route path="/" element={<Home />} />

      <Route
        path="/resource/:resourceName"
        element={<ResourceContentDisplay />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ), 
  {
    basename: "/awareness"
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
