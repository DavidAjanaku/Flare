import { Link } from 'react-router-dom';
import photo from './assets/syn.png'

function Features() {
    return (
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={photo} alt="Feature illustration" className="w-full" />
          </div>
          <div className="md:w-1/2 md:pl-8 px-7">
            <h2 className="text-4xl font-bold mb-4">Exploring Flare Synthesis EVM's DeFi Solutions</h2>
            <p className="mb-6">

Flare Synthesis EVM is at the forefront of decentralized finance, delivering cutting-edge solutions for the modern financial environment. Prioritizing blockchain interoperability and secure smart contracts, Flare Synthesis EVM guarantees efficient transactions and transparent governance.

Learn how Flare Synthesis EVM elevates DeFi with quantum computing capabilities and advanced data encryption, providing unmatched security.

</p>
<Link to='/connect'>
<button className="bg-white text-gray-800 mt-7  px-6 rounded-full py-5 font-bold">
              Connect with Flare Synthesis EVM
            </button>
</Link>
        
          </div>
        </div>
      </section>
    );
  }
  export default Features;