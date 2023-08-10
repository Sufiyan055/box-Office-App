import { useState } from 'react';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
  //apidata rendered by searching in setApiData initially it is null create a function to deal with this
  const [apiData, setApiData] = useState(null);
  //Error handling usestate
  const [apiDataError, setApiDataError] = useState(null);

  //console.log(searchStr);
  /* Here i learn about data binding 1 way and 2 way */

  const onSearch = async ({ q, searchOption }) => {
    //rerender
    try {
      setApiDataError(null);
      let result;
      if (searchOption === 'shows') {
        result = await searchForShows(q);
      } else {
        result = await searchForPeople(q);
      }

      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
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
