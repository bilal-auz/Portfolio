import "./aboutMe.scss";

export default function Contact() {
  return (
    <div className="section aboutMe" id="aboutMe">
      <div className="container px-10">
        <div className="left">
          <h1 className="text-5xl text-center overflow-hidden mb-5 text-[#f5f5f5]">
            Who <span className="me">Am I</span> ?
          </h1>
          <p className="text-xl overflow-hidden mb-1 text-center text-[#f5f5f5]">
            I'm a passionate tech enthusiast with a strong interest in software
            engineering, pursuing a Master's degree in Computer Engineering by
            day🌅, and actively honing my skills as a Software Engineer by
            night🌇.
            <br />
            <br />
            I'm primarily focused on Backend development. I also have a solid
            understanding of frontend technologies. I thrive on challenges and I
            am always eager to learn and grow in the world of software
            development.
            {/* <span className="me">My main interest</span> is in
            <span className="me"> Backend</span>, where I can{" "}
            <span className="do">Design</span> and{" "}
            <span className="do">Build</span> the{" "}
            <span className="do">System Structures</span> and{" "}
            <span className="do">databases</span>, Write{" "}
            <span className="do">APIs</span>,{" "}
            <span className="do">Maintain</span> and{" "}
            <span className="do">fix bugs</span>. However, I */}
            <br />
            <br />
            Additionally, I'm deeply passionate about topics within the field of
            AI and Natural Language Processing (NLP), as these align closely
            with the subject matter of my master's thesis.
            {/* <span className="me"> I am interested </span> in areas related to{" "}
            <span className="tech">AI</span> and{" "}
            <span className="tech">Big Data</span>, and their technologies such
            as{" "}
            <span className="tech">
              Hadoop, Spark, Machine Learning, Reporting and visualization.
            </span> */}
            <br />
            <br />
          </p>
          {/* <p className="text-lg overflow-hidden">
            Apart from <span className="tech">Coding</span>, other things
            <span className="me"> I'm passionate</span> about..
          </p>
          <ul className="">
            <li id="list-item-gym">
              <img src="assets/listBullets/boxing_gym.svg" alt="" />
              <p>Sport.</p>
            </li>
            <li id="list-item-music">
              <img src="assets/listBullets/music.svg" alt="" />
              <p>90s Music.</p>
            </li>
            <li id="list-item-learnTech">
              <img src="assets/listBullets/new_tech.svg" alt="" />
              <p>Learn New Technologies.</p>
            </li>
          </ul> */}
        </div>
        <div className="right">
          {/* <img src="assets/listBullets/server.svg" alt="" /> */}
          <img src="assets/listBullets/code.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
