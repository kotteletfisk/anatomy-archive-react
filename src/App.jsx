import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Search from "./components/Search";
import LoginModal from "./components/LoginModal";
import DetailComponent from "./pages/DetailComponent";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";
import { useContext } from "react";
import AuthContext from "./components/AuthContext";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginModal />} />

        {isLoggedIn ? (
          <Route path="/admin-page" element={<AdminPage />} />
        ) : null}

        <Route path="/exercises/:id" element={<DetailComponent />} />
        <Route path="/EditPage/:entity/:id" element={<EditPage />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
