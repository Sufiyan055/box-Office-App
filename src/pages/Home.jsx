import { useState } from "react";

const Home = () => {
  const [searchStr, setSearchStr] = useState("");

  //console.log(searchStr);
  /* Here i learn about data binding 1 way and 2 way */
  const onSearchInputChange = (ev) => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();
    console.log(body);
  };

  return (
    <>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Home;
