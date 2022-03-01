import "./portfolio.scss";
export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <script src="leader-line.min.js"></script>
      <div className="top">
        <div class="grid grid-rows-1 grid-flow-col">
          <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxTitle">
              <h2>Programming Languages</h2>
            </div>
            <div className="skillsBoxItems">
              <div className="item">
                <img src="assets/icons/java.svg" alt="" />
              </div>
              <div className="item">
                <img src="assets/icons/python.svg" alt="" />
              </div>
              <div className="item">
                <img src="assets/icons/c.svg" alt="C" />
              </div>
              <div className="item">
                <img src="assets/icons/ccharp.svg" alt="C#" />
              </div>
            </div>
          </div>
          <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxTitle">
              <h2>Web Development</h2>
            </div>
            <div className="skillsBoxItems">
              <div className="item">
                <img src="assets/icons/javascript.svg" alt="js" />
              </div>
              <div className="item">
                <img src="assets/icons/nodejs.svg" alt="nodejs" />
              </div>
              <div className="item">
                <img src="assets/icons/php.svg" alt="php" />
              </div>
              <div className="item">
                <img src="assets/icons/laravel.svg" alt="laravel" />
              </div>
            </div>
          </div>
          <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxTitle">
              <h2>Databases/Database Management</h2>
            </div>
            <div className="skillsBoxItems">
              <div id="threeItems" className="item col-span-2">
                <img
                  src="assets/icons/dataModeling (2).svg"
                  alt="data modeling"
                />
                <h3>Data Modeling</h3>
              </div>
              <div className="item">
                <img src="assets/icons/sqlserver.svg" alt="nodejs" />
              </div>
              <div className="item">
                <img src="assets/icons/mongodb.svg" alt="php" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div class="grid grid-rows-1 grid-flow-col">
          <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxTitle">
              <h2>Version Control & Virtualization</h2>
            </div>
            <div className="skillsBoxItems">
              <div className="item">
                <img src="assets/icons/git.svg" alt="Git" />
              </div>
              <div className="item">
                <img src="assets/icons/docker.svg" alt="" />
              </div>
            </div>
          </div>
          <div id="me" className="skillsBox rounded-lg m-4">
            <div>
              <img src="assets/icons/me.svg" alt="" />
            </div>
          </div>
          <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxTitle">
              <h2>BI tools</h2>
            </div>
            <div id="bi_tools" className="skillsBoxItems">
              <div className="item">
                <img src="assets/icons/powerBi (3).svg" alt="php" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
