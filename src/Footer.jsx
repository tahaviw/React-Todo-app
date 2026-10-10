function Footer(props) {
  return (
    <>
      <p>
        Developed by {props.name}, Junior Front-End Developer. Passionate about
        combat sports and technology.
      </p>
      <h3>
        Built with React · Vite · Hooks · JSX
        <br />© {props.year}
      </h3>
    </>
  );
}
export default Footer;
