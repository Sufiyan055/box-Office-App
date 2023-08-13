const ShowCard = ({ name, image, id, summary }) => {
  // below => shoring the full description by using split,slice, join and replace methods.
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No discription';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>

      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
