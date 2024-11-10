import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary w-full p-8">
      <div className="max-w-[100rem] w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
