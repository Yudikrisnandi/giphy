import { useQuery, useQueryClient } from 'react-query';
import { searchGiphy } from '../../services/giphy';
import { fromJS } from 'immutable';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import GiphyList from './GiphyList';
import Input from '../../components/Input';
import { useNavigate } from "react-router-dom";
import { SearchContext } from '../../App';
import { useContext } from 'react';



function Giphy() {
  const { search, setSearch } = useContext(SearchContext);
  const [text, setText] = useState('test');
  const [query] = useDebounce(text, 1500);
  const queryClient = useQueryClient();
  const keepPreviousData = false;
  const { isLoading, isError, data, error } = useQuery(query, searchGiphy)
  const navigate = useNavigate();

  let giphys = '';

  if(!isLoading && !error){
    giphys = fromJS(data.data.data)
  }

  function handleChange(e){
    const key = e.target.value
    if(!key){
      return;
    }
    setText(key);
  }

  function handleBackClick(){
    setSearch(false);
    navigate('/');
  }

  return (
    <div className="mt-10">
      <div className="mb-5 w-full flex justify-between">
        <img src="https://developers.giphy.com/branch/master/static/header-logo-0fec0225d189bc0eae27dac3e3770582.gif" alt="logo" />
        <button 
          className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm"
          onClick={handleBackClick}
        >
          Back
        </button>
      </div>
      {search ? <Input onChange={handleChange}/> : null }
      <GiphyList 
        isLoading={isLoading}
        loading={true}
        error={error}
        data={giphys}
      />
    </div>
  );
}

export default Giphy;
