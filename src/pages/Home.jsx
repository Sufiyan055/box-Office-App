import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

// useReducer is the alternative of useState not a replacement.

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  /* Here i learn about data binding 1 way and 2 way */

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  //After getting a result show the on rerender
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    //belo is called Optional chaining
    if (apiData?.length === 0) {
      return <div>No results</div>;
    }

    // below if show that present the result otherwise actors
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
