import { QueryClient, QueryClientProvider } from 'react-query';
import { router } from './configs/router';
import { RouterProvider } from "react-router-dom";
import { createContext, useState } from 'react';

export const SearchContext = createContext();

function App() {
  const queryClient = new QueryClient()
  const [search, setSearch] = useState(false);
  return (
    <div className="max-w-screen-md mx-auto">
      <QueryClientProvider client={queryClient}>
        <SearchContext.Provider value={{ search, setSearch }}>
          <RouterProvider router={router} />
        </SearchContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
