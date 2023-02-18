import { useNavigate } from "react-router-dom";
import useSearch from '../../hooks/search';
import { SearchContext } from '../../App';
import { useContext } from 'react';

export default function Welcome(){
  const { search, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();
  
  function handleNavigateToSearch(){
    setSearch(true);
    navigate('/giphy');
  }
  
  return(
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div>
          <h1 class="mb-4 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to</h1>
          <div className="mb-5 w-full flex justify-center">
            <img src="https://developers.giphy.com/branch/master/static/header-logo-0fec0225d189bc0eae27dac3e3770582.gif" alt="logo" />
          </div>
          <div className="flex items-center justify-center">
            <div class="space-x-4">
              <button 
                className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm"
                onClick={() => navigate('/giphy')}
              >
                Iron Man Giphy
              </button>
              <button 
                className="px-5 py-2 font-medium text-blue-900 border border-b-4 border-r-4 border-blue-600 rounded-lg shadow-lg hover:shadow-sm"
                onClick={handleNavigateToSearch}
              >
                Search You Giphy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
