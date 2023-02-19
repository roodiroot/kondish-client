import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { Layout } from "./components/Layout";
import { allPablicRoutes, privatRoutes } from "./constanse";
import { checkUser } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuth } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (localStorage.length > 0) {
      dispatch(checkUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuth && pathname === "/login-page") {
      navigate("/admin-page");
      return;
    }
    if (!isAuth && pathname === "/admin-page") {
      navigate("/login-page");
      return;
    }
  }, [pathname, isAuth, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {allPablicRoutes.map((i) => (
          <Route key={i.id} path={i.path} element={<i.component />} />
        ))}
        {isAuth &&
          privatRoutes.map((i) => (
            <Route key={i.id} path={i.path} element={<i.component />} />
          ))}
      </Route>
    </Routes>
  );
}

export default App;
