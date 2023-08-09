import { Link } from 'react-router-dom';

/* Here array of object is created in LINKS. content text and path(to) this is used for navigation purpose. VERY HelpFul */

const LINKS = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/starred',
  },
];

/* This page is used for navigation between the pages */

/* This link is like anchor tag to navigate to pages. "to" is a prop work as href */

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
