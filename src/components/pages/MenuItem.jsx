function MenuItem({ Icon, name }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between"
      }}
    >
      <Icon />
      <p>{name}</p>
    </div>
  );
}

export default MenuItem;
