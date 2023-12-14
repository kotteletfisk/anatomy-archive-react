import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Test from "./pages/Test";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/test" element={<Test />} />
        <Route path="/AdminPage" element={<AdminPage />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
