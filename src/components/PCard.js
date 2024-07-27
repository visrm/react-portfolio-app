export default function PCard({ imgSrc, projTitle, projLink }) {
  return (
    <>
      <div className="cards mx-2 my-4 sm:m-2 sm:min-h-[360px] flex bg-opacity-50 rounded-2xl basis-4/12 sm:basis-4/12 grow-0">
        <figure className="cards-fig">
          <img alt="Project thumbnail" loading="lazy" src={imgSrc} />
        </figure>
        <div>
          <p className="cards-desc text-sm sm:text-lg">{projTitle}</p>
          <button className="cards-button sm:text-sm">
            <a href={projLink} target="_blank" rel="noreferrer">
              visit
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
