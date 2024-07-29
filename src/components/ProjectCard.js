export default function ProjectCard({ projImgSrc, projTitle, projLink }) {
  return (
    <>
      <div className="cards grid sm:min-h-[300px] sm:max-w-[420px] h-auto bg-opacity-50 rounded-xl">
        <figure className="cards-fig">
          <img alt="Project thumbnail" loading="lazy" src={projImgSrc} />
        </figure>
        <div>
          {/* <div className="hover:min-h-[27%]"> */}
          <p className="cards-desc p-1 sm:p-2 text-sm sm:text-base max-h-[80%]">
            {projTitle}
          </p>
          <button className="cards-button text-xs sm:text-sm font-medium">
            <a href={projLink} target="_blank" rel="noreferrer">
              visit
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
