import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Test from "./pages/Test";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/test" element={<Test />} />
        <Route path='/search' element={<h1>TEST</h1>}/>
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
