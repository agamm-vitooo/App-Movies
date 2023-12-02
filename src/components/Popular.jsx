
import duneImage from "../assets/images/Popular/dune.jpg";
import everythingImage from "../assets/images/Popular/everything.jpg";
import infiniteImage from "../assets/images/Popular/infinite.jpg";
import jokerImage from "../assets/images/Popular/joker.jpg";
import lightyearImage from "../assets/images/Popular/lightyear.jpg";
import morbiusImage from "../assets/images/Popular/morbius.jpg";

const cardData = [
  {
    image: duneImage,
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
  {
    image: everythingImage,
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },

  {
    image: infiniteImage,
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
  {
    image: jokerImage,
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
  {
    image: lightyearImage,
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
  {
    image: morbiusImage,
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
];

const Popular = () => {
  return (
    <div>
      <div className="container popular bg-slate-800">
        <h1 className="text-3xl font-semibold flex text-white justify-center mt-5">Popular Movies</h1>
        <div className="card mt-5 flex flex-wrap px-3 gap-5 justify-around">
          {cardData.map((card, index) => (
            <div key={index} className="card-item d-flex flex-column h-100">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-grow-1">
                <img className="rounded-t-lg object-cover h-96 w-full" src={card.image} alt="" />
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;

