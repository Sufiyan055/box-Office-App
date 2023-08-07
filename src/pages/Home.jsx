import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* This link is like anchor tag to navigate to pages. "to" is a prop work as href */}
      <Link to="/starred">Go to Starred page</Link>
      Home Page
    </>
  );
};

export default Home;
