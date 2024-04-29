import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { LazyExoticComponent, Suspense } from "react";

import logo from "../logo.svg";
import { ShoppingPage } from "../02-Patterns-Components/pages/ShoppingPage";

type JsxElement = () => JSX.Element; 

export interface Routes {
  to: string;
  path: string;
  Component:  JsxElement | LazyExoticComponent<JsxElement>;
  name: string;
}

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    ShoppingPage
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    about
                  </NavLink>
                </li>
            </ul>
          </nav>

          <Routes>
              <Route path="/" element={<ShoppingPage />} />
              <Route path="/about" element={<h1>about</h1>} />
            
              <Route path="*" element={<Navigate to="/juan" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
