const Crew = ({ crew, details }) => {
  const director = crew?.filter(jobs => jobs.job === 'Director');
  const writer = crew?.filter(
    jobs =>
      jobs.job === 'Screenplay' || jobs.job === 'Story' || jobs.job === 'Writer'
  );

  return (
    <>
      {director?.length > 0 && (
        <div className="info">
          <span className="bold text">Director: </span>
          <span className="text">
            {director?.map((d, i) => (
              <span key={i}>
                {d.name}
                {director?.length - 1 !== i && ', '}
              </span>
            ))}
          </span>
        </div>
      )}
      {writer?.length > 0 && (
        <div className="info">
          <span className="bold text">Writer: </span>
          <span className="text">
            {writer?.map((d, i) => (
              <span key={i}>
                {d.name}
                {writer?.length - 1 !== i && ', '}
              </span>
            ))}
          </span>
        </div>
      )}
      {details?.created_by?.length > 0 && (
        <div className="info">
          <span className="text bold">Creator: </span>
          {details?.created_by?.map((d, i) => (
            <span key={i} className="text">
              {d.name}
              {details?.created_by.length - 1 !== i && ', '}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default Crew;
