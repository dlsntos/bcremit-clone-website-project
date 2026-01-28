import phFlag from 'assets/flag-icon/philippines.png';
import MockApp from './components/MockApp';

const HeroSection = () => {
  const pesoSign = '\u20B1';

  return (
    <section className="hero-container flex justify-center h-full p-5 text-bluewhale">
      <div className="hero-content">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-3xl lg:text-7xl text-blue-whale font-bold tracking-normal">
            <span className="flex flex-row items-center gap-3">
              Money Transfer to
              <img src={phFlag} className="h-10 lg:h-20 w-auto rounded-md" />
            </span>
            <span className="mt-5">
              as Simple as 1-2-3
            </span>
          </h1>
          <p className="mt-2 text-md lg:text-xl">Great Exchange Rate & Transfer fee from {pesoSign}500!</p>
        </div>
        <MockApp/>
      </div>
    </section>
  );
}

export default HeroSection;