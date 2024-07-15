import { Link } from "react-router-dom";
import photo from './assets/p.png';

function Hero() {
  return (
    <section className="container px-10 py-12  gap-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4 animate-from-top">Revolutionizing Decentralized Finance with Flare Synthesis EVM</h1>
        <p className="mb-6 animate-from-bottom">Flare Synthesis EVM is a groundbreaking platform in the decentralized finance (DeFi) ecosystem. It empowers users with cutting-edge blockchain technologies, ensuring seamless integration with quantum computing capabilities and providing robust data encryption.</p>
        <Link to='/connect'>
          <button className="bg-gray-800 mt-10 rounded-full text-white animate-from-bottom px-10 py-5  font-bold">
            Join Flare Synthesis EVM
          </button>
        </Link>
      </div>
      <div className="md:w-1/2">
        <img src={photo} alt="Feature illustration" className="w-full h-[] animate-shrink" />
      </div>
    </section>
  );
}

export default Hero;
