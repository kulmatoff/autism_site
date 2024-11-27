import { useState, useEffect } from "react";
import { Carousel } from "./components/Carousel";
import { ChevronLeft, ChevronRight } from "react-feather";

const images = [
  ["../imgs/1.png", "Sensory integration"],
  ["../imgs/2.png", "Defectologist"],
  ["../imgs/3.png", "Speech therapist"],
];

function App() {
  // const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);

  return (<>
    <div className="first-slide">
      <header className="flex flex-row">
        <div className="header-left_side">logo</div>
        <div className="header-right_side flex flex-row items-center justify-between">
          <div className="header-right_side-button"></div>
          <div className="header-right_side-button"></div>
          <div className="header-right_side-button"></div>
          <button className="header-right_side-contact">Contact</button>
        </div>
      </header>
      <div className="title">
        {/* {loading} */}
        <h2 className="title-text1 font-bold">
          We will<br></br>overcome<br></br>autism!
        </h2>
        <h2 className="title-text2 font-semibold text-right text-6xl leading-tight">
          We use an<br></br> individual approach,<br></br> advanced techniques
          and<br></br> create a space for development<br></br> and support
        </h2>
        <h1 className="title-text3 font-semibold mt-40">Correction programs</h1>

        <div className="flex flex-row justify-center items-center gap-10">
        <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={40} />
        </button>
          <div className="flex flex-col">
            <img
              className="carousel-image"
              src={"../imgs/1.png"}
              alt=""
            ></img>
            <h3 className="text-white/100 text-3xl text-center">Sensory integration</h3>
          </div>
          <div className="flex flex-col">
            <img
              className="carousel-image2"
              src={"../imgs/2.png"}
              alt=""
            ></img>
            <h3 className="text-white/100 text-4xl text-center">Defectologist</h3>
          </div>
          <div className="flex flex-col">
            <img
              className="carousel-image"
              src={"../imgs/3.png"}
              alt=""
            ></img>
            <h3 className="text-white/100 text-3xl text-center">Speech therapist</h3>
          </div>
        <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={40} />
        </button>
        </div>
        {/* <Carousel
          children={images.map((data) => (
          ))}
        /> */}
      </div>
    </div>
    <div className="second-slide">
      <h1 className="second-slide-title font-semibold">More than <b>500</b><br></br>children received help</h1>
    </div>
    </>
  );
}

export default App;
