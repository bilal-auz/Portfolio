import "./aboutMe.scss";

export default function Contact() {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="container ">
        <div className="left">
          <h1 className="text-5xl text-center overflow-hidden mb-5">
            Who <span className="me">Am I</span> ?
          </h1>
          <p className="text-xl overflow-hidden mb-1">
            <span className="me">Bilal Abouzid, </span> Senior-Year
            <span className="tech"> Computer Science </span> Student,
            specialized in
            <span className="tech"> Big Data</span>.
            <br />
            <br />
            <span className="me">My main interest</span> is in
            <span className="me"> Backend Engineering</span>, where I can{" "}
            <span className="do">Design</span> and{" "}
            <span className="do">Build</span> the{" "}
            <span className="do">System Structures</span> and{" "}
            <span className="do">databases</span>, Write{" "}
            <span className="do">APIs</span>,{" "}
            <span className="do">Maintain</span> and{" "}
            <span className="do">fix bugs</span>.
            <br />
            <br />
            Also,<span className="me"> I am interested </span> in areas related
            to Data such as <span className="tech">AI</span> and{" "}
            <span className="tech">Big Data</span>, and their technologies such
            as{" "}
            <span className="tech">
              Hadoop, Spark, Machine Learning, Reporting and visualization.
            </span>
            <br />
            <br />
            Apart from <span className="tech">Coding</span>, other things
            <span className="me"> I'm passionate</span> about..
          </p>
          <ul>
            <li id="list-item-gym">
              <img src="assets/listBullets/boxing_gym.svg" alt="" />
              <p>Boxing.</p>
            </li>
            <li id="list-item-music">
              <img src="assets/listBullets/music.svg" alt="" />
              <p>90s Music.</p>
            </li>
            <li id="list-item-learnTech">
              <img src="assets/listBullets/new_tech.svg" alt="" />
              <p>Learn New Technologies.</p>
            </li>
          </ul>
        </div>
        <div className="right">
          {/* <img src="assets/listBullets/server.svg" alt="" /> */}
          <img src="assets/listBullets/code.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
