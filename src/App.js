import { useState, useEffect } from "react";
import { ImageCarousel } from "./components/ImageCarousel";
import { AnimatedCounter } from "./components/AnimatedCounter";

const images = [
  {
    src: '../imgs/1.png',
    alt: 'Sensory integration',
    title: 'Sensory integration',
  },
  {
    src: '../imgs/2.png',
    alt: 'Defectologist',
    title: 'Defectologist',
  },
  {
    src: '../imgs/3.png',
    alt: 'Speech therapist',
    title: 'Speech therapist',
  },
];

function App() {
  // const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);

  return (
    <div className="slides snap-y snap-mandatory h-screen w-screen">
      <div className="first-slide w-screen snap-center m-0">
        <header className="px-16 py-4 flex items-center justify-between">
          <img src={"../imgs/logo.png"} className="w-24 rounded-full"></img>
          <div className="flex items-center justify-between w-2/5 h-12">
            <a href="" className="text-white text-lg">About us</a>
            <a href="" className="text-white text-lg">Programs</a>
            <a href="" className="text-white text-lg">Forum</a>
            <a href="" className="text-white text-lg">Contact</a>
            <button className="w-28 h-full bg-custom-blue text-white text-lg rounded-lg">Log in</button>
          </div>
        </header>
        <div className="px-32 py-8">
          <h1 className="text-9xl font-bold text-custom-blue">We will <br></br>overcome <br></br>autism!</h1>
          <h2 className="text-6xl font-bold text-custom-white text-right">We use an <br></br>
individual approach, <br></br>
advanced techniques and <br></br>
create a space for development <br></br>
and support</h2>
          <ImageCarousel images={images} />
        </div>
      </div>
      <div className="second-slide w-screen h-screen snap-center p-8">
        <h1 className="text-7xl text-custom-orange font-semibold">More than <AnimatedCounter start={300} end={500} duration={0.9} className={"font-bold text-9xl"}/> <br></br>
        children received help</h1>
        <h2 class="mb-10 text-6xl text-custom-darkorange mt-12">Our advantages:</h2>
        <ul class="list-none m-0 p-0">
          <li class="flex items-center mb-10 text-custom-darkorange text-5xl">
            <span class="w-16 h-16 border-4 border-[#88281C66] rounded-full inline-flex justify-center items-center mr-[10px] font-bold text-5xl">1</span>
            Personal approach
          </li>
          <li class="flex items-center mb-10 text-custom-darkorange text-5xl">
            <span class="w-16 h-16 border-4 border-[#88281C66] rounded-full inline-flex justify-center items-center mr-[10px] font-bold text-5xl">2</span>
            Modern programs
          </li>
          <li class="flex items-center mb-10 text-custom-darkorange text-5xl">
            <span class="w-16 h-16 border-4 border-[#88281C66] rounded-full inline-flex justify-center items-center mr-[10px] font-bold text-5xl">3</span>
            Proven technique
          </li>
        </ul>
      </div>
      <div className="forum-slide w-screen h-screen snap-center bg-custom-lightblue">
        <div className="flex justify-stetch h-2/3">
          <div className="p-20 w-2/5">
            <h1 className="text-right text-custom-white text-8xl mb-10">Our Specialists</h1>
            <p className="text-right text-white text-4xl font-light">The center employs specialists with many years of experience in working with children with ASD</p>
          </div>
          <img src={"../imgs/georgedroyd.png"} className="w-2/3 h-full"></img>
        </div>
        <div className="flex justify-around h-1/3 items-center">
          <h1 className="text-custom-darkblue text-3xl font-semibold w-1/4 text-center">Continuous training and professional development</h1>
          <h1 className="text-custom-darkblue text-3xl font-semibold w-1/4 text-center">Certified specialists</h1>
          <h1 className="text-custom-darkblue text-3xl font-semibold w-1/4 text-center">Individual approach to each child</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
