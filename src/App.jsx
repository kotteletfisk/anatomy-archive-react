import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import RelationSearch from "./components/RelationSearch";
import LoginModal from "./components/LoginModal";
import DetailComponent from "./pages/DetailComponent";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";
import { useContext } from "react";
import AuthContext from "./components/AuthContext";
import MapSearch from "./components/SvgSearch/MapSearch";
import Search from "./components/Search";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/search/*" element={<Search />}>
          <Route path="map" element={<MapSearch />} />
          <Route path="relation" element={<RelationSearch />} />
        </Route>
        <Route path="/login" element={<LoginModal />} />

        {isLoggedIn ? (
          <Route path="/admin-page" element={<AdminPage />} />
        ) : null}

        <Route path="/exercises/:id" element={<DetailComponent />} />
        <Route path="/editPage/:entity/:id" element={<EditPage />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
