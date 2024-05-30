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
import Categories from "./components/Categories";
import CategoryContentDisplay from "./components/CategoryContentDisplay";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<AboutUs />} />
      <Route path="categories" element={<Categories />} />
      <Route path="/" element={<Home />} />

      <Route
        path="/category/:categoryName"
        element={<CategoryContentDisplay />}
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
