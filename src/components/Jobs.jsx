const Jobs = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </>
  );
};

export default Jobs;
