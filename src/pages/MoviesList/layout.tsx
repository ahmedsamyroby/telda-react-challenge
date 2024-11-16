import { Outlet } from "react-router-dom";

export default function MovieListLayout() {
  return (
    <div className="bg-primary w-full min-h-screen mx-auto">
      <Outlet />
    </div>
  );
}
