import React from 'react';

export default function useSearch() {
  const [search, setSearch] = React.useState(false);

  function handleSetSearch(){
    setSearch(true);
  }

  return {
    search,
    handleSetSearch,
  };
}

