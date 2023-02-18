import React from 'react';

export const SearchContext = React.createContext();

export default function ContextSearch() {
  return (
    <SearchContext.Provider value="Reed">
      <User />
    </SearchContext.Provider>
  )
}

function User() {
  return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>}
      {/* prints: Reed */}
    </UserContext.Consumer>
  )
}
