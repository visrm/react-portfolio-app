import "../App.css";
import SkillsMarquee from "./SkillsMarquee";

const Skills = () => {
  return (
    <section className="skills flex w-full h-full sm:min-h-full my-2 sm:my-4 sm:px-2 p-2 sm:place-content-center bg-opacity-25">
      <article className="flex flex-col flex-nowrap pb-2 sm:pb-6 sm:px-4 rounded-xl">
        <h2 className="mr-auto ml-auto p-2 sm:p-4 text-xl sm:text-2xl font-medium sm:tracking-wide uppercase">
          Technical Skills
        </h2>
        <SkillsMarquee />
        <div className="skills-grid grid gap-3 gap-x-6">
          <article className="skills-grid-element">
            <h3 className="p-1 sm:px-2 sm:py-1 uppercase font-medium font-sans text-base tracking-wide">
              <span className="underline underline-offset-4">
                Front-End Development
              </span>
            </h3>
            <p className="font-light text-xs sm:text-sm tracking-wide min-w-fit">
              Proficient in HTML5, CSS (bootstrap, tailwind), JavaScript and
              various Front-end frameworks for building responsive user
              interfaces and interactive web experiences.
            </p>
          </article>
          <article className="skills-grid-element">
            <h3 className="p-1 sm:px-2 sm:py-1 uppercase font-medium font-sans text-base tracking-wide">
              <span className="underline underline-offset-4">
                Programming Languages
              </span>
            </h3>
            <p className="font-light text-xs sm:text-sm tracking-wide min-w-fit">
              Strong understanding of programming fundamentals with experience
              in object-oriented and procedural programming languages, allowing
              for efficient problem-solving and code maintainability.
            </p>
          </article>
          <article className="skills-grid-element">
            <h3 className="p-1 sm:px-2 sm:py-1 uppercase font-medium font-sans text-base tracking-wide">
              <span className="underline underline-offset-4">
                Back-End Development
              </span>
            </h3>
            <p className="font-light text-xs sm:text-sm tracking-wide min-w-fit">
              Strong foundation in backend development principles and eager to
              learn and grow.
            </p>
          </article>
          <article className="skills-grid-element">
            <h3 className="p-1 sm:px-2 sm:py-1 uppercase font-medium font-sans text-base tracking-wide">
              <span className="underline underline-offset-4">
                Version Control
              </span>
            </h3>
            <p className="font-light text-xs sm:text-sm tracking-wide min-w-fit">
              Experience with Git for version control, collaboration and code
              management, including branching, merging and conflict resolution.
            </p>
          </article>
          <article className="skills-grid-element">
            <h3 className="p-1 sm:px-2 sm:py-1 uppercase font-medium font-sans text-base tracking-wide">
              <span className="underline underline-offset-4">
                Database Management
              </span>
            </h3>
            <p className="font-light text-xs sm:text-sm tracking-wide min-w-fit">
              A strong working knowledge of database design principles, data
              modeling and querying using SQL.
            </p>
          </article>
        </div>
      </article>
    </section>
  );
};

export default Skills;
