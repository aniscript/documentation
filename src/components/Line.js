const Line = ({ background, height }) => {
  return (
    <hr
      style={{
        backgroundColor: `${background}`,
        height: `${height}`,
        border: "none",
      }}
    />
  );
};

export default Line;
