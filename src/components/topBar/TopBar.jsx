import "./topBar.scss";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <a className="navItem" href="#intro">
              Home
            </a>
          </div>
          <div className="itemContainer">
            <a className="navItem" href="#portfolio">
              Portfolio
            </a>
          </div>
          <div className="itemContainer">
            <a className="navItem" href="#works">
              works
            </a>
          </div>
          <div className="itemContainer">
            <a className="navItem" href="#contact">
              contact
            </a>
          </div>
        </div>
        <div className="right">
          <div className="itemContainer">
            <a className="navItem" href="">
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
