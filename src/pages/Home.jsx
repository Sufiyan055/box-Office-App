import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  //console.log(inputValue);
  /* Here i learn about data binding 1 way and 2 way */
  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  };
  return (
    <>
      <div>{inputValue}</div>
      <button
        type="button"
        onClick={() => {
          setInputValue("Sufiyan");
        }}
      >
        Update to random
      </button>
      <input type="text" value={inputValue} onChange={onInputChange} />
    </>
  );
};

export default Home;
