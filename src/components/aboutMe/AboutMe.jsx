import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import "./aboutMe.scss";

export default function Contact() {
  return (
    <div className="section aboutMe mb-10" id="aboutMe">
      <div className="container flex flex-col-reverse items-center lg:w-[72%] align-start justify-between lg:flex-row lg:items-start">
        <div className="left mt-10 w-[80%] lg:w-[45%] lg:mt-0">
          <h1 className="text-3xl text-center overflow-hidden mb-5 text-[#f5f5f5]">
            Who <span className="me">Am I</span> ?
          </h1>
          <p className="text-xl overflow-hidden mb-1 text-justify	text-[#f5f5f5]">
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
            <br />
            <br />
            Additionally, I'm deeply passionate about topics within the field of
            AI and Natural Language Processing (NLP), as these align closely
            with the subject matter of my master's thesis.
            <br />
            <br />
          </p>
        </div>

        <div className="right flex flex-col w-[80%] lg:w-[45%] h-full">
          {/* <img src="assets/listBullets/code.svg" alt="" /> */}
          <h1 className="text-3xl text-center overflow-hidden mb-5 text-[#f5f5f5]">
            Let's talk
          </h1>
          <div className="card flex flex-col justify-center lg:flex-row lg:justify-between lg:justify-around w-full shadow-2xl bg-[#0d071975] rounded-xl px-14 lg:p-5">
            <div className="flex flex-col mx-5 pt-3 lg:pt-0 justify-center items-center rounded-lg lg:w-[40%] lg:mx-0">
              <img className="w-72 rounded-lg" src="assets/QR.png" alt="" />
              <div className="w-[80%] flex flex-row items-around justify-around mt-5">
                <div className="">
                  <a
                    href="https://www.linkedin.com/in/bilal-abouzid"
                    target="_blank"
                  >
                    <svg
                      className="w-10 rounded-md"
                      xmlns="http://www.w3.org/2000/svg"
                      // width="24"
                      // height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
                        fill="#2e845c"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/bilal-auz" target="_blank">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        fill="#2e845c"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:items-start lg:justify-between py-5 lg:py-0">
              <div className="flex flex-row mb-5">
                <div className="mr-5">
                  <svg
                    className="w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.052 17.823c-.94.53-2.439 1.295-5.143 2.088-.294.086-.593-.057-.717-.286-.214-.365-.027-.836.382-.957 2.956-.871 4.379-1.695 5.228-2.188 1.22-.707 1.511-.687 2.376-.001.256.203.612.485 1.127.818.298.193.378.591.179.883l-.013.02c-.195.285-.583.363-.874.175-.245-.159-.458-.308-.642-.442-.883-.646-.97-.637-1.903-.11zm-7.239-5.951c2.7-.766 4.714-2.265 5.515-4.156.444-1.05 1.322-1.495 2.183-1.495 1.428 0 2.81 1.225 2.085 2.936-.44 1.042-1.052 1.975-1.795 2.802-.23.256-.223.645.016.893.25.258.655.299 1.028-.124.822-.933 1.476-1.967 1.945-3.073.47-1.112.389-2.232-.229-3.155-.646-.964-1.815-1.564-3.051-1.564-.699 0-1.371.192-1.944.556-.627.397-1.122.994-1.432 1.726-.647 1.529-2.344 2.757-4.654 3.413-.288.082-.485.346-.48.643.007.416.41.712.813.598zm7.035 2.685c.307-.229.34-.672.078-.943l-.017-.018c-.223-.23-.583-.258-.839-.066-1.614 1.203-3.562 2.067-5.63 2.589-.179.045-.33.163-.418.323-.087.161-.104.351-.044.524.107.31.435.485.755.405 1.984-.499 3.819-1.281 5.372-2.295.255-.167.503-.34.743-.519zm1.35-5.968c.139-.327-.016-.704-.346-.841-.33-.137-.709.017-.848.344-1.058 2.499-3.731 4.427-7.253 5.276-.335.081-.551.404-.495.742.061.362.417.599.78.512 3.469-.835 6.784-2.778 8.162-6.033zm.219-6.138c-2.242-.24-4.376.688-5.633 2.139-.26.3-.193.757.133.975.266.176.623.128.829-.114.952-1.115 2.662-1.922 4.533-1.723 1.533.164 2.935.973 3.715 2.307.154.264.474.386.767.292.389-.125.564-.576.359-.927-.983-1.682-2.737-2.739-4.703-2.949zm-8.26 2.541c.275.188.626.115.809-.159l.388-.573c1.256-1.799 3.293-2.854 5.639-2.978.347-.018.62-.303.62-.648 0-.363-.307-.652-.672-.633-2.274.12-4.446 1.003-6.016 2.733-.427.478-.69.823-.945 1.409-.168.382-.103.658.177.849zm-.166 4.113c1.276-.417 1.957-1.01 2.439-1.653.221-.293.147-.71-.157-.912-.289-.192-.677-.127-.887.147-.372.484-.867.894-1.791 1.197-.224.073-.399.262-.436.54-.06.46.385.827.832.681zm16.118 5.644c-1.246-.382-2.04-.86-2.408-1.445-.457-.726-.285-1.692-.086-2.812.13-.735.275-1.555.251-2.421-.006-.204-.108-.394-.276-.512-.168-.118-.383-.15-.579-.087-.269.087-.447.339-.438.62.023.735-.105 1.462-.232 2.178-.224 1.264-.456 2.571.264 3.714.543.864 1.571 1.518 3.177 2.007.339.104.698-.097.785-.44.084-.345-.115-.697-.458-.802zm-.718 2.344c-2.316-.749-3.832-1.78-4.601-3.124-.177-.309-.572-.417-.883-.241-.311.175-.419.567-.243.876.928 1.62 2.667 2.839 5.285 3.695.332.108.692-.054.827-.374.141-.334-.035-.719-.385-.832zm-1.119 2.103c-.721-.263-1.346-.522-1.89-.772-.283-.13-.619-.038-.793.218-.25.366-.091.792.246.946.581.267 1.248.543 2.014.822.296.108.612-.024.748-.249.228-.349.07-.82-.325-.965zm-9.23 1.7c-.148-.29-.494-.42-.798-.302-.291.113-.608.23-.957.351-.214.074-.375.252-.425.472-.108.476.343.916.79.763.39-.134.743-.264 1.065-.389.327-.127.519-.515.325-.895zm11.533-8.426c-.195-.08-.334-.173-.416-.279-.228-.296-.115-.933.027-1.74.233-1.319.553-3.125-.255-5.361-.934-2.582-3.531-4.322-6.359-4.894-.407-.082-.786.228-.786.637 0 .301.213.56.511.619 2.601.516 4.69 2.07 5.415 4.072.693 1.915.419 3.461.199 4.704-.189 1.073-.354 2 .221 2.744.232.302.565.535 1.021.71.381.146.797-.105.843-.505.035-.302-.137-.591-.421-.707zm-6.531 10.329c-2.496-1.096-1.827-1.097-4.201.004-.228.105-.37.337-.358.586.018.388.369.611.694.611.092 0 .182-.018.261-.055 1.7-.793 1.109-.84 3.026.005.076.034.161.05.25.05.32 0 .677-.212.698-.603.014-.256-.133-.494-.37-.598zm2.567-1.607c-1.579-.635-2.711-1.245-3.431-1.632-1.133-.61-1.265-.718-2.642-.01l-.126.065c-.311.159-.434.537-.275.846.184.36.576.445.869.295.573-.293.876-.434 1.557-.067.752.404 1.938 1.042 3.592 1.706.468.188.945-.226.856-.714-.038-.22-.19-.404-.4-.489z"
                      fill="#2e845c"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Software Engineer</p>
                  <p className="text-2xl mt-1">Bilal Abouzid</p>
                </div>
              </div>

              <div className="flex flex-row mb-3">
                <div className="mr-5">
                  <svg
                    className="w-7 rounded-lg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
                      fill="#2e845c"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Email</p>
                  <p className="text-1xl mt-1">imBilalAbouzid@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="mr-5">
                  <svg
                    className="w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 12c0 2.209-3.581 4-8 4s-8-1.791-8-4c0-1.602 1.888-2.98 4.608-3.619l1.154 1.824c-.401.068-.806.135-1.178.242-3.312.949-3.453 2.109-.021 3.102 2.088.603 4.777.605 6.874-.001 3.619-1.047 3.164-2.275-.268-3.167-.296-.077-.621-.118-.936-.171l1.156-1.828c2.723.638 4.611 2.016 4.611 3.618z"
                      fill="#2e845c"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Location</p>
                  <div className="flex flex-row mt-1">
                    <p className="text-1xl mr-1">From Morocco</p>
                    <svg
                      className="w-3 rounded-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-ma"
                      viewBox="0 0 640 480"
                    >
                      <path fill="#c1272d" d="M640 0H0v480h640z" />
                      <path
                        fill="none"
                        stroke="#006233"
                        stroke-width="11.7"
                        d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-md mr-1">Live in Turkey</p>
                    <svg
                      className="w-3 rounded-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-tr"
                      viewBox="0 0 640 480"
                    >
                      <g fill-rule="evenodd">
                        <path fill="#e30a17" d="M0 0h640v480H0z" />
                        <path
                          fill="#fff"
                          d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z"
                        />
                        <path
                          fill="#e30a17"
                          d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"
                        />
                        <path
                          fill="#fff"
                          d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-center w-full overflow-hidden mt-5">
                <a
                  href="assets/resume/Bilal-Abouzid-Resume-2023.pdf"
                  target="_blank"
                  className="btn bg-[#2e845c] text-[#180d30] hover:bg-[#2e845c] border-none"
                >
                  <img className="w-7" src="assets/resume-dark.svg" alt="" />
                  My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
