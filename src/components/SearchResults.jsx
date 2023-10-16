import React from 'react';

import WebSearchResultCard from './WebSearchResultCard';

function SearchResults({ searchResults }) {
  const { webPages, images } = searchResults;
  const searchData = [];

  // Custom object to send to WebSearchResultCard
  webPages.value.forEach((page, index) => {
    searchData.push({
      id: Math.floor(Math.random() * 10000),
      name: page.name,
      imgUrl: images?.value[index].contentUrl || "https://pbs.twimg.com/profile_images/1080482618393669632/2yNJEjmp_400x400.jpg",
      url: page.url,
      snippet: page.snippet
    });
  });



  return (
    <>
      {
        searchData.map((elem) => <WebSearchResultCard
          key={elem.id}
          page={elem} />
        )
      }
    </>

  );
}

export default SearchResults;