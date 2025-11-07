import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import App from "./App";
import NavBar from "./components/NavBar";
import Service from "./components/services/Service";
import FilmProduction from "./components/services/FilmProduction";
import Branding from "./components/services/Branding";
import ArtCuration from "./components/services/ArtCuration";
import Login from "./components/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<><NavBar /><App /></>} />
      <Route path="/login" element={<><NavBar/><Login /></>} />
      <Route path="/service" element={<><NavBar /><Service /></>} />
      <Route path="/film-production" element={<><NavBar /><FilmProduction /></>} />
      <Route path="/branding" element={<><NavBar /><Branding /></>} />
      <Route path="/art-curation" element={<><NavBar/><ArtCuration /></>} />
    </>
  )
);

const root = document.getElementById("root")!;
createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
