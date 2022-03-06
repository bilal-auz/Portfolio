import "./topBar.scss";

export default function TopBar() {
  const toHome = () => {
    window.location = "/#intro";
  };

  return (
    <div className="topBar">
      <div className="wrapper">
        <div className="left">
          <img src="assets/auz.svg" alt="" onClick={() => toHome()} />
        </div>
        <div className="middle">
          <div className="itemContainer">
            <a className="navItem" href="#intro">
              Home
            </a>
          </div>
          <div className="itemContainer">
            <a className="navItem" href="#portfolio">
              Skills
            </a>
          </div>
          <div className="itemContainer">
            <a className="navItem" href="#works">
              Projects
            </a>
          </div>
          <div className="itemContainer">
            <a className="navItem" href="#contact">
              About Me
            </a>
          </div>
        </div>
        <div className="right">
          <div className="itemContainer">
            <img src="assets/resume.svg" alt="" />
            <a className="navItem" href="">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
