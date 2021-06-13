export const NavBar = (props: { user: string }) => {
  return (
    <nav
      style={{
        minHeight: "50px",
        width: "100%",
        background: "black",
        color: "white",
      }}
    >
      <a>{props.user}</a>
    </nav>
  );
};
