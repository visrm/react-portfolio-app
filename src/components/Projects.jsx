import "../App.css";
import ProjectCard from "./ProjectCard";
import Weather_fc from "../assets/weather-app-thumb.png";
import Digi_gui from "../assets/digilocker-guide-thumb.png";
import BMI_check from "../assets/BMI-checker-thumb.png";
import JS_drum from "../assets/JS-drumKit-thumb.png";
import Whack_mole from "../assets/whack-a-mole-thumb.png";
import Anime_list from "../assets/Anime-list-thumb.png";
import Quick_quiz from "../assets/Quick-quiz-thumbnail.png";
import Header from "./Header";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <Header />
      <br />
      <section className="h-full min-h-fit w-full max-w-full">
        <article className="p-4 overflow-hidden" id="projects">
          <ProjectCard
            projImgSrc={Quick_quiz}
            projTitle="Quick Quiz webpage"
            projLink="https://quiz-app-visrms-projects.vercel.app/"
          />
          <ProjectCard
            projImgSrc={BMI_check}
            projTitle="BMI Checker Webapp"
            projLink="https://bmi-calculator-topaz-mu.vercel.app/"
          />
          <ProjectCard
            projImgSrc={Whack_mole}
            projTitle="Javascript Whack-A-Mole webapp"
            projLink="https://whack-a-mole-game-iota.vercel.app/"
          />
          <ProjectCard
            projImgSrc={JS_drum}
            projTitle="Javascript DrumKit"
            projLink="https://js-drum-kit-two.vercel.app/"
          />
          <ProjectCard
            projImgSrc={Weather_fc}
            projTitle="Javascript Weather Forecaster"
            projLink="https://weather-application-nine-theta.vercel.app/"
          />
          <ProjectCard
            projImgSrc={Digi_gui}
            projTitle="Beginner digiLocker guide-page"
            projLink="https://digilocker-guide.vercel.app/"
          />
          <ProjectCard
            projImgSrc={Anime_list}
            projTitle="Personal Animelist webpage"
            projLink="https://anime-lists.vercel.app/"
          />
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
