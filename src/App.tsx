

import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Loader from "./components/Loader";
import Food from "./pages/Food";
import Products from "./pages/Products";
import Travel from "./pages/Travel";
import Clothing from "./pages/Clothing";
import ProductPage from "./pages/ProductPage";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const SharedLayout = lazy(() => import("./components/SharedLayout"));

const main = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<Loader />}>
          <SharedLayout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />

      
      <Route
        path="/product/:id"
        element={
          <Suspense fallback={<Loader />}>
            <ProductPage />
          </Suspense>
        }
      />
      <Route
        path="/categories/:category"
        element={
          <Suspense fallback={<Loader />}>
            <CategoryPage />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="services"
        element={
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        }
      />

      <Route
        path="contact"
        element={
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        }
      />


      <Route
        path="clothing"
        element={
          <Suspense fallback={<Loader />}>
            <Clothing />
          </Suspense>
        }
      />

      <Route
        path="products"
        element={
          <Suspense fallback={<Loader />}>
            <Products />
          </Suspense>
        }
      />


      <Route
        path="food"
        element={
          <Suspense fallback={<Loader />}>
            <Food />
          </Suspense>
        }
      />

      <Route
        path="travel"
        element={
          <Suspense fallback={<Loader />}>
            <Travel />
          </Suspense>
        }
      />


      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <ErrorPage />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={main} />;
}

export default App;
