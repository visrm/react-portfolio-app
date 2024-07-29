import "./App.css";
import pfp from "./assets/user_profile.jpg";
import C_assg from "./assets/C-Assignments-thumb.png";
import Weather_fc from "./assets/weather-app-thumb.png";
import Digi_gui from "./assets/digilocker-guide-thumb.png";
import ProjectCard from "./components/PCard";

export default function App() {
  return (
    <>
      <div className="App">
        <header className="App-header m-0 px-1 bg-black/10 backdrop-blur-md backdrop-brightness-125 ease-out duration-300 shadow shadow-black/50">
          <p className="flex px-4 sm:px-5 mx-2 text-center text-3xl font-extrabold tracking-wide">
            Portfolio
          </p>
          <nav className="dropdown dropdown-left flex flex-row flex-nowrap h-16 justify-evenly">
            <div
              className="menu-button place-content-center px-1 mx-1"
              id="menu-btn"
              role="button"
              tabIndex="0"
            >
              <svg
                className="h-12 w-18"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <ul
              className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52 mx-4 flex-col flex-nowrap list-none"
              id="dropdown-cont"
              tabIndex="0"
            >
              <li className="sm:mx-1 p-2 basis-1/2 font-semibold text-lg text-black/50">
                <a href="#project-bg">Projects</a>
              </li>
              <li className="sm:mx-1 p-2 basis-1/2 font-semibold text-lg text-black/50">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="hero min-h-[90vh] text-base-200">
            <div className="hero-overlay bg-opacity-10" />
            <article className="hero-content flex-col lg:flex-row mr-auto ml-auto">
              <img
                alt="PROFILE PIC"
                className="w-2/5 sm:w-3/12 mt-14 sm:mt-0 rounded-full bg-contain shadow-black/50 shadow-2xl"
                src={pfp}
              />
              <div className="p-1 sm:p-3">
                <h1 className="sm:text-5xl text-3xl font-bold">
                  {" "}
                  Rahul Murali{" "}
                  <span className="text-base sm:text-xl font-normal">
                    <i>He/Him</i>
                  </span>
                  <span className="block font-normal text-base sm:text-2xl">
                    Computer Applications Student at Calicut University
                  </span>
                </h1>
                <p className="flex py-4 sm:py-6 text-sm sm:text-xl tracking-wide">
                  This portfolio showcases Rahul's projects, where you'll see
                  his problem-solving approach and ability to translate concepts
                  into functional applications. He's a quick learner who thrives
                  in collaborative environments and enjoys tackling challenges
                  head-on.
                </p>
              </div>
            </article>
          </section>
          <section className="m-0 py-2 sm:py-5 h-full sm:min-h-full">
            <article className="sm:p-4 py-4 overflow-hidden" id="project-bg">
              <ProjectCard
                projImgSrc={Weather_fc}
                projTitle="A simple Javascript Weather Forecaster."
                projLink="https://weather-application-nine-theta.vercel.app/"
              />
              <ProjectCard
                projImgSrc={Digi_gui}
                projTitle="A beginner digiLocker guide webpage."
                projLink="https://digilocker-guide.vercel.app/"
              />
              <ProjectCard
                projImgSrc={C_assg}
                projTitle="list of basic C programs for uni CS purpose."
                projLink="https://github.com/visrm/C-Assignments"
              />
            </article>
          </section>
          <section className="skills flex w-full h-full sm:min-h-full my-2 sm:my-4 sm:px-2 p-2 sm:place-content-center bg-opacity-25">
            <article className="flex flex-col flex-nowrap pb-2 sm:pb-6 sm:px-4 rounded-xl">
              <h2 className="mr-auto ml-auto p-2 sm:p-4 text-xl sm:text-2xl font-medium sm:tracking-wide uppercase">
                Technical Skills
              </h2>
              <div className="skills-grid grid gap-4 sm:gap-6">
                <article className="skills-grid-element">
                  <h3 className="p-1 sm:px-2 sm:py-1 uppercase font-medium font-sans text-lg tracking-wide">
                    <span className="underline underline-offset-4">
                      Front-End Development
                    </span>
                  </h3>
                  <p className="px-1 sm:px-2 font-light sm:text-base text-sm tracking-wide whitespace-normal min-w-fit">
                    Proficient in HTML5, CSS (bootstrap, tailwind), JavaScript
                    and various Front-end frameworks for building responsive
                    user interfaces and interactive web experiences.
                  </p>
                </article>
                <article className="skills-grid-element">
                  <h3 className="p-1 sm:px-2 sm:py-1 uppercase font-medium font-sans text-lg tracking-wide">
                    <span className="underline underline-offset-4">
                      Programming Languages
                    </span>
                  </h3>
                  <p className="px-1 sm:px-2 font-light sm:text-base text-sm tracking-wide whitespace-normal min-w-fit">
                    Strong understanding of programming fundamentals with
                    experience in object-oriented and procedural programming
                    languages, allowing for efficient problem-solving and code
                    maintainability.
                  </p>
                </article>
                <article className="skills-grid-element">
                  <h3 className="p-1 sm:px-2 sm:py-1 uppercase font-medium font-sans text-lg tracking-wide">
                    <span className="underline underline-offset-4">
                      Back-End Development
                    </span>
                  </h3>
                  <p className="px-1 sm:px-2 font-light sm:text-base text-sm tracking-wide whitespace-normal min-w-fit">
                    Strong foundation in backend development principles and
                    eager to learn and grow.
                  </p>
                </article>
                <article className="skills-grid-element">
                  <h3 className="p-1 sm:px-2 sm:py-1 uppercase font-medium font-sans text-lg tracking-wide">
                    <span className="underline underline-offset-4">
                      Database Management
                    </span>
                  </h3>
                  <p className="px-1 sm:px-2 font-light sm:text-base text-sm tracking-wide whitespace-normal min-w-fit">
                    A strong working knowledge of database design principles,
                    data modeling and querying using SQL.
                  </p>
                </article>
                <article className="skills-grid-element">
                  <h3 className="p-1 sm:px-2 sm:py-1 uppercase font-medium font-sans text-lg tracking-wide">
                    <span className="underline underline-offset-4">
                      Version Control
                    </span>
                  </h3>
                  <p className="px-1 sm:px-2 font-light sm:text-base text-sm tracking-wide whitespace-normal min-w-fit">
                    Experience with Git for version control, collaboration and
                    code management, including branching, merging and conflict
                    resolution.
                  </p>
                </article>
              </div>
            </article>
          </section>
          <section className="flex flex-col education max-w-full text-base-200 px-4 py-8 sm:p-8 sm:place-items-center gap-2 sm:gap-4">
            <h2 className="block text-xl sm:text-2xl font-medium tracking-wide uppercase">
              Educational Qualifications
            </h2>
            <article className="education-grid grid md:grid-cols-2 grid-cols-1 place-content-center gap-2">
              <div className="p-2 sm:p-4 bg-white/5 rounded-md">
                <p className="px-2 text-base sm:text-lg font-normal">
                  University of Calicut
                </p>
                <p className="px-2 py-0 text-sm sm:text-base font-sans">
                  Master of Computer Applications, IT
                  <span className="block mx-auto text-xs sm:text-sm text-white/75">
                    2023 - present
                  </span>
                </p>
              </div>
              <div className="p-2 sm:p-4 bg-white/5 rounded-md">
                <p className="px-2 text-base sm:text-lg font-normal">
                  University of Calicut
                </p>
                <p className="px-2 py-0 text-sm sm:text-base font-sans">
                  Bachelor of Science, Mathematics
                  <span className="block mx-auto text-xs sm:text-sm text-white/75">
                    2020 - 2023
                  </span>
                </p>
              </div>
            </article>
          </section>
          <section className="contacts flex bottom-0 px-1 sm:px-4 py-3 sm:py-4 flex-row flex-nowrap align-middle justify-evenly sm:gap-2">
            <h2
              className="p-2 sm:text-xl text-base font-medium sm:tracking-wide uppercase clear-right"
              id="contact"
            >
              Contacts
            </h2>
            <a href="mailto:yveltal4286@gmail.com" rel="noopener noreferrer">
              <div className="icons8-gmail" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahulmurali852/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="icons8-linkedin" />
            </a>
            <a
              href="https://discord.com/invite/Sd3KQMMGtb"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="icons8-discord" />
            </a>
            <a
              href="https://github.com/visrm/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="icons8-github" />
            </a>
          </section>
        </main>
        <footer className="flex w-full py-1 bottom-0 text-base-200">
          <p className="block mr-auto ml-auto">© Copyright 2024 Rahul Murali</p>
        </footer>
      </div>
    </>
  );
}
