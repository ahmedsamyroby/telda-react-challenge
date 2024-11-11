import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-primary w-full p-8">
        <div className="max-w-[100rem] w-full mx-auto">
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
