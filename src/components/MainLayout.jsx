/* Mainlayout is linked with app.jsx */
import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import AppTitle from "./AppTitle";
/* Outlet is work like a children */
/* Mainlayout is connected with apptitle and navs*/
const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Navs />
      <Outlet />
    </div>
  );
};

export default MainLayout;
