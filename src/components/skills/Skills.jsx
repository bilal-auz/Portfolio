import "./skills.scss";
export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <script src="leader-line.min.js"></script>
      <div className="top">
        <div class="grid grid-rows-1 grid-flow-col">
          <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxItems">
              <div className="item">
                <img src="assets/icons/java.svg" alt="" />
              </div>
              <div className="item">
                <img src="assets/icons/python.svg" alt="" />
              </div>
              <div className="item col-span-2">
                <img src="assets/icons/c.svg" alt="C" />
              </div>
            </div>
            <div className="skillsBoxTitle">
              <h2>Programming Languages</h2>
            </div>
          </div>
          <div id="me" className="skillsBox rounded-lg m-4">
            <div className="middleContainer">
              <div className="wrapper">
                <h2>Skillsets</h2>
                <span>
                  <code>&lt;Skillsets /&gt;</code>
                </span>
              </div>
            </div>
          </div>
          <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxItems">
              <div className="item">
                <img src="assets/icons/react.svg" alt="react" />
              </div>
              <div className="item" id="nodejs">
                <img src="assets/icons/nodejs.svg" alt="nodejs" />
              </div>
              <div className="item">
                <img src="assets/icons/php.svg" alt="php" />
              </div>
              <div className="item">
                <img src="assets/icons/laravel.svg" alt="laravel" />
              </div>
            </div>
            <div className="skillsBoxTitle">
              <h2>Web Development</h2>
            </div>
          </div>
        </div>
        <div className="lamp"></div>
      </div>
      <div className="bottom">
        <div class="grid grid-rows-1 grid-flow-col">
          <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxItems">
              <div className="item">
                <img src="assets/icons/git.svg" alt="Git" />
              </div>
              <div className="item">
                <img src="assets/icons/docker.svg" alt="" />
              </div>
            </div>
            <div className="skillsBoxTitle">
              <h2>Version Control & Virtualization</h2>
            </div>
          </div>

          <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxItems">
              <div id="threeItems" className="item col-span-2"></div>
              <div className="item">
                <img src="assets/icons/sqlserver.svg" alt="nodejs" />
              </div>
              <div className="item">
                <img src="assets/icons/mongodb.svg" alt="php" />
              </div>
            </div>
            <div className="skillsBoxTitle">
              <h2>Database Management</h2>
            </div>
          </div>
          <div class="skillsBox rounded-lg m-4">
            <div id="bi_tools" className="skillsBoxItems">
              <div className="item">
                <img id="linux" src="assets/icons/linux.svg" alt="php" />
              </div>
              <div className="item">
                <img src="assets/icons/postman.svg" alt="php" />
              </div>
            </div>
            <div className="skillsBoxTitle">
              <h2>Other Tools I use</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
