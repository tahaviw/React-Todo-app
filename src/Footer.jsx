function Footer({ name, year }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__text">
          Developed by {name}, Junior Front-End Developer. Passionate about combat
          sports and technology.
        </p>
        <p className="site-footer__tech">
          Built with React · Vite · Hooks · JSX
          <br />© {year}
        </p>
      </div>
    </footer>
  );
}
export default Footer;
