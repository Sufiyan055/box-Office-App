import { useState } from "react";
import { searchForShows } from "./../api/tvmaze";

const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  //apidata rendered by searching in setApiData initially it is null create a function to deal with this
  const [apiData, setApiData] = useState(null);
  //Error handling usestate
  const [apiDataError, setApiDataError] = useState(null);

  //console.log(searchStr);
  /* Here i learn about data binding 1 way and 2 way */
  const onSearchInputChange = (ev) => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault();

    try {
      setApiDataError(null);
      const result = await searchForShows(searchStr);
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

    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
