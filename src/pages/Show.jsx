import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

//custom hook => A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.

const Show = () => {
  const { showId } = useParams();
  //react strict mode is doulble print the query thats why useQuery is used to fetch api data instead of useEffect.
  // useQuery replacement of useEffect is used to fetch data when mounted. This method is very effecttive to fetch data. In modern react applications data fetching  library is very good way to go.
  // By using useQuery the api refetched when we click on window and then change the focus , but this is resolved when use refetchOnWindowFocus.
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId], //In queryKey when data changes its rerender i.e showId.
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showError) {
    return <div>We hav an error: {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <Link to="/">Home</Link>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>Data is loading</div>;
};

export default Show;
