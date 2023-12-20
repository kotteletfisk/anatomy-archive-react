import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Test from "./pages/Test";
import ErrorPage from "./pages/ErrorPage";
import Search from "./components/Search";
import LoginModal from "./components/LoginModal";
import DetailComponent from "./pages/DetailComponent";
import AdminPage from "./pages/AdminPage";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/test" element={<Test />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/exercises/:id" element={<DetailComponent />} />
        <Route path="/AdminPage" element={<AdminPage />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
