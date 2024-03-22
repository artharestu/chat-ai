import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function RouteLayout() {
  return (
    <>
      <Navbar />
      <div className="container-fluid text-light">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
