function Footer({ name, year }) {
  return (
    <>
      <p>
        Developed by {name}, Junior Front-End Developer. Passionate about combat
        sports and technology.
      </p>
      <h3>
        Built with React · Vite · Hooks · JSX
        <br />© {year}
      </h3>
    </>
  );
}
export default Footer;
