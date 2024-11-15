import { Outlet } from "react-router-dom";

export default function MovieListLayout() {
  return (
    <div className="bg-primary w-full min-h-screen p-8 mx-auto flex items-center justify-center">
      <div className="max-w-[100rem] w-full">
        <Outlet />
      </div>
    </div>
  );
}
