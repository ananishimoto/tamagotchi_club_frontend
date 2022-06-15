const Hearts = ({ evolutionlevel, evolutionId }) => {
  const heart = (
    <img
      src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
      alt="hearts"
      style={{ maxHeight: "30px", maxWidth: "30px" }}
      loading="lazy"
    />
  );

  if (evolutionId === 1) {
    return <p>{heart}</p>;
  } else if (evolutionId === 2) {
    return (
      <p>
        {heart} {heart}
      </p>
    );
  } else if (evolutionId === 2) {
    return (
      <p>
        {heart} {heart}
      </p>
    );
  } else if (evolutionId === 3) {
    return (
      <p>
        {heart} {heart} {heart}
      </p>
    );
  } else if (evolutionId === 4) {
    return (
      <p>
        {heart} {heart} {heart} {heart}
      </p>
    );
  } else if (evolutionId === 5) {
    return (
      <p>
        {heart} {heart} {heart} {heart}
      </p>
    );
  } else if (evolutionId === 6) {
    return (
      <p>
        {heart} {heart} {heart} {heart} {heart}
      </p>
    );
  } else if (evolutionId === 7) {
    return (
      <div>
        <p>
          {heart} {heart} {heart} {heart} {heart}
        </p>
        <p>{heart}</p>
      </div>
    );
  } else if (evolutionId === 8) {
    return (
      <p>
        {heart} {heart} {heart} {heart} {heart}
      </p>
    );
  } else if (evolutionId === 9) {
    return (
      <div>
        <p>
          {heart} {heart} {heart} {heart} {heart}
        </p>
        <p>{heart}</p>
      </div>
    );
  } else if (evolutionId === 10) {
    return (
      <div>
        <p>
          {heart} {heart} {heart} {heart} {heart}
        </p>
        <p>
          {heart} {heart}
        </p>
      </div>
    );
  } else if (evolutionId === 11) {
    return (
      <div>
        <p>
          {heart} {heart} {heart} {heart} {heart}
        </p>
        <p>
          {heart} {heart} {heart}
        </p>
      </div>
    );
  }
};

export { Hearts };
