import React from 'react'

import "./SearchResultsList.css";

import "./SearchResult"

export const SearchResultsList = ({results}) => {
  return (
  <div className="results_list">
    {results.map((result,id) => {
      return <div key = {id}>{result.name}</div>
      //return <SearchResult result={result} key={id} /
    })

    }
  </div>
  )
}

