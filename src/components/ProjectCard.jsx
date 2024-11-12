export default function ProjectCard({ projImgSrc, projTitle, projLink }) {
  return (
    <>
      <div className="cards grid sm:min-h-[295px] sm:max-w-[380px] bg-opacity-50 rounded-lg">
        <figure className="cards-fig">
          <img
            alt="Project thumbnail"
            loading="lazy"
            src={projImgSrc}
            style={{
              aspectRatio: "16/9",
            }}
          />
        </figure>
        <div className="justify-center">
          {/* <div className="hover:min-h-[27%]"> */}
          <p className="cards-desc text-xs sm:text-sm max-h-[80%]">
            {projTitle}
          </p>
          <button className="cards-button text-xs sm:text-xs font-medium">
            <a href={projLink} target="_blank" rel="noreferrer">
              visit
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
