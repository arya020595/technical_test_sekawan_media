import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "./NotFound";
import Error from "./components/Error";
import HostLayout from "./components/HostLayout";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Host/Dashboard";
import HostVanDetail, {
  loader as vansHostDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVans, { loader as vansHostLoader } from "./pages/Host/HostVans";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Login, { loader as loginLoader } from "./pages/Login";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import requireAuth from "./utils";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} loader={loginLoader} />
        <Route path="vans">
          <Route
            index
            element={<Vans />}
            loader={vansLoader}
            errorElement={<Error />}
          />
          <Route path=":id" element={<VanDetail />} loader={vanDetailLoader} />
        </Route>

        <Route path="host" element={<HostLayout />}>
          <Route
            element={<Dashboard />}
            index
            loader={async () => await requireAuth()}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => await requireAuth()}
          />
          <Route
            element={<Reviews />}
            path="reviews"
            loader={async () => await requireAuth()}
          />
          <Route loader={vansHostLoader} path="vans" element={<HostVans />} />
          <Route
            loader={vansHostDetailLoader}
            path="vans/:id"
            element={<HostVanDetail />}>
            <Route
              element={<HostVanInfo />}
              index
              loader={async () => await requireAuth()}
            />
            <Route
              element={<HostVanPricing />}
              path="pricing"
              loader={async () => await requireAuth()}
            />
            <Route
              element={<HostVanPhotos />}
              path="photos"
              loader={async () => await requireAuth()}
            />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
