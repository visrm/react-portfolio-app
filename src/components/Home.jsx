import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Header />
        <br />
        <main>
          <Hero />
          <Projects />
          <Skills />
        </main>
        {/* <aside className="flex flex-col education max-w-full text-base-200 px-4 py-8 sm:p-5 sm:place-items-center">
          <h2 className="block text-xl sm:text-xl font-medium tracking-wide uppercase underline underline-offset-4">
            Educational Qualifications
          </h2>
          <article className="education-grid grid md:grid-cols-2 grid-cols-1 py-2 place-items-center">
            <div className="p-2 sm:px-4 rounded-lg">
              <p className="px-2 text-base font-normal">
                University of Calicut
              </p>
              <p className="px-2 text-sm font-sans">
                Master of Computer Applications
                <span className="block mx-auto text-xs sm:text-sm text-white/75">
                  2023 - 2025
                </span>
              </p>
            </div>
            <div className="p-2 sm:px-4 rounded-lg">
              <p className="px-2 text-base font-normal">
                University of Calicut
              </p>
              <p className="px-2 text-sm font-sans">
                Bachelor of Science, Mathematics
                <span className="block mx-auto text-xs sm:text-sm text-white/75">
                  2020 - 2023
                </span>
              </p>
            </div>
          </article>
        </aside> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
