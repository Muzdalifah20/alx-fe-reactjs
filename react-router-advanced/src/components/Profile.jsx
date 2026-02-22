import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to={"details"}>Details</Link> |{" "}
        <Link to={"settings"}>Settings</Link>
        <Outlet />
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </nav>
    </div>
  );
}
