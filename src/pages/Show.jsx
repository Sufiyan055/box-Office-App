import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';

//custom hook => A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.

const Show = () => {
  const { showId } = useParams();
  //react strict mode is doulble print the query thats why useQuery is used to fetch api data instead of useEffect.
  // useQuery replacement of useEffect is used to fetch data when mounted. This method is very effecttive to fetch data. In modern react applications data fetching  library is very good way to go.
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId], //In queryKey when data changes its rerender i.e showId.
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>We hav an error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is loading</div>;
};

export default Show;
