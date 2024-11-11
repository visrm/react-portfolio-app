import "../App.css";
import Footer from "./Footer";
import Header from "./Header";

const AboutMe = () => {
  return (
    <>
      <Header />
      <section className="py-12">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          <article className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-base-200">
              Rahul Murali
            </h2>
            <p className="mb-6 text-xl text-base-100 font-sans">
              Front-End Developer
            </p>
            <div className="contacts flex bg-[#fff]/10 p-1 sm:px-4 sm:py-4 flex-row flex-nowrap align-middle justify-evenly sm:gap-2">
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
                href="https://github.com/visrm/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="icons8-github" />
              </a>
            </div>
          </article>
          <article className="mt-8 text-lg p-1 text-base-200 leading-relaxed">
            <p>
              Hello! My name is Rahul Murali, and I'm a software engineer with a
              passion for building innovative and user-friendly applications.
            </p>
            <p className="mt-4">
              With over a year of experience in the industry, I have worked on a
              wide range of projects and have a strong understanding of modern
              software development practices.
            </p>
            <p className="mt-4">
              In my free time, I enjoy exploring new technologies, contributing
              to open-source projects, and staying up-to-date with the latest
              trends in the industry. I'm also an avid reader and enjoy hiking
              and spending time outdoors.
            </p>
            <p className="mt-4">
              If you'd like to learn more about my work or connect with me, feel
              free to reach out on any of my social media channels. I'm always
              happy to chat and explore new opportunities.
            </p>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutMe;
