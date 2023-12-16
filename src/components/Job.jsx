const Job = (props) => {
  return (
    <article className={props.className}>
      <h2>{props.title}</h2>
      <div className="bottom-article">
        <p>{props.contractType}</p>
        <span>-</span>
        <p>{props.country}</p>
        <span>-</span>
        <p>{props.city}</p>
      </div>
    </article>
  );
};

export default Job;
