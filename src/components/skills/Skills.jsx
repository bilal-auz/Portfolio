import "./skills.scss";
export default function Portfolio() {
  return (
    <div className="section skills" id="skills">
      <div className="next">
        <a href="#projects">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            ></path>
          </svg>
        </a>
      </div>
      <script src="leader-line.min.js"></script>
      <div className="top">
        <div class="grid grid-rows-1 grid-flow-col">
          {/* <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxItems">
              <div className="item">
                <img src="assets/icons/java.svg" alt="" />
              </div>
              <div className="item">
                <img src="assets/icons/python.svg" alt="" />
              </div>
            </div>
            <div className="skillsBoxTitle">
              <h2>Programming Languages</h2>
            </div>
          </div> */}
          <div id="me" className="skillsBox rounded-lg">
            <div className="middleContainer">
              <div className="wrapper">
                {/* <h2>Skillsets</h2> */}
                <span>
                  <code>&lt;Skillsets /&gt;</code>
                </span>
              </div>
            </div>
          </div>
          {/* <div class="skillsBox rounded-lg m-4">
            <div className="skillsBoxItems">
              <div className="item">
                <img src="assets/icons/react.svg" alt="react" />
              </div>
              <div className="item" id="nodejs">
                <img src="assets/icons/nodejs.svg" alt="nodejs" />
              </div>

              <div className="item col-span-2">
                <img src="assets/icons/laravel.svg" alt="laravel" />
              </div>
            </div>
            <div className="skillsBoxTitle">
              <h2>Web Development</h2>
            </div>
          </div> */}
        </div>
        <div className="lamp"></div>
      </div>
      <div className="bottom mx-auto px-24 ">
        <div class="grid grid-cols-2 gap-4 text-center md:grid-cols-4 lg:grid-cols-6 lg:gap-16">
          <div class="flex items-center justify-center">
            <img
              className="block object-contain h-16 max-w-none"
              src="assets/icons/html.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              className="block object-contain h-16"
              src="assets/icons/css.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              className="block object-contain h-16"
              src="assets/icons/nodejs.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              className="block object-contain h-[100px]"
              src="assets/icons/express.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              className="block object-contain h-16"
              src="assets/icons/react.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              className="block object-contain h-16"
              src="assets/icons/mongodb.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              className="block object-contain h-16"
              src="assets/icons/tailwind.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              className="block object-contain h-[90px]"
              src="assets/icons/graphql.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              id="linux"
              className="block object-contain h-[100px]"
              src="assets/icons/mysql.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              className="block object-contain h-[80px]"
              src="assets/icons/postman.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              className="block object-contain h-16"
              src="assets/icons/git.svg"
              alt="html"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              id="linux"
              className="block object-contain h-16"
              src="assets/icons/linux.svg"
              alt="html"
            />
          </div>

          {/* 
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
              <h2>Others</h2>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
