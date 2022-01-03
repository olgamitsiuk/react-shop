function Footer () {
    return   <footer className="page-footer green lighten-1">
      <div className="footer-copyright green lighten-1">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://olgamitsiuk.github.io/react-shop" target ="_blank"
         rel="noreferrer">Repo</a>
      </div>
    </div>
  </footer>
}
export { Footer }