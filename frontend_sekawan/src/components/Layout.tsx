import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Headers from "./Header";

function Layout() {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
