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

  return (
    <>
      <div className="first-slide m-0">
        <header className="flex flex-row">
          <div className="header-left_side rounded-full"><img className="rounded-full" src={"../imgs/logo.png"} width={300} height={300}></img></div>
          <div className="header-right_side flex flex-row items-center justify-between">
            <a className="header-right_side-button" href="">About us</a>
            <a className="header-right_side-button" href="">Programs</a>
            <a className="header-right_side-button" href="">Forum</a>
            <a className="header-right_side-button" href="">Contact</a>
            <button className="header-right_side-contact">Log in</button>
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
          <h1 className="title-text3 font-semibold mt-40">
            Correction programs
          </h1>

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
              <h3 className="text-white/100 text-3xl text-center">
                Sensory integration
              </h3>
            </div>
            <div className="flex flex-col">
              <img
                className="carousel-image2"
                src={"../imgs/2.png"}
                alt=""
              ></img>
              <h3 className="text-white/100 text-4xl text-center">
                Defectologist
              </h3>
            </div>
            <div className="flex flex-col">
              <img
                className="carousel-image"
                src={"../imgs/3.png"}
                alt=""
              ></img>
              <h3 className="text-white/100 text-3xl text-center">
                Speech therapist
              </h3>
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
        <h1 className="second-slide-title font-semibold">
          More than <span>500</span>
          <br></br>children received help
        </h1>
        <h2 className="second-slide-title2">Our advantages:</h2>
        <ol>
          <li>
            <h2 className="second-slide-title3">Personal approach</h2>
          </li>
          <li>
            <h2 className="second-slide-title3">Modern programs</h2>
          </li>
          <li>
            <h2 className="second-slide-title3">Proven technique</h2>
          </li>
        </ol>
      </div>
      <div className="forum-slide">
        <div className="forum-slide_titles flex flex-row pt-20">
          <h2 className="forum-slide_title1 font-semibold">
            Communication with other<br></br> parents of children<br></br> from
            the center,<br></br> collective<br></br> support
          </h2>
          <div className="forum-slide_right-side flex flex-col">
            <h2 className="forum-slide_title2 font-semibold">
              Forum for parents
            </h2>
            <div className="forum-slide_right-side_button">
              <h3>Click on the button to go to the forum</h3>
              <button>Join</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">

    <div class="form-section">
      <h2 class="text">Запишитесь на консультацию прямо сейчас!</h2>
      <form action="#" method="POST">
        <div class="form-row">
          <label for="name">Как вас зовут? <span style={{color: "88281C"}}>*</span></label>
          <input type="text" id="name" name="name" placeholder="Имя" required></input>
        </div>

        <div class="form-row">
          <label for="contact">Контактный номер телефона или email <span style={{color: "88281C"}}>*</span></label>
          <input type="text" id="contact" name="contact" placeholder="+996 (000) 000-000" required></input>
        </div>

        <div class="form-row">
          <label for="age">Возраст ребенка <span style={{color: "88281C"}}>*</span></label>
          <input type="number" id="age" name="age" placeholder="Возраст" required></input>
        </div>

        <div class="form-row">
          <label for="purpose">Цель обращения <span style={{color: "88281C"}}>*</span></label>
          <input type="text" id="purpose" name="purpose" placeholder="логопед, психолог и т.д." required></input>
        </div>

        <div class="form-row">
          <label for="comment">Комментарий</label>
          <textarea id="comment" name="comment" placeholder="Дополнительная информация"></textarea>
        </div>

        <button type="submit" class="submit-btn">Отправить</button>
      </form>
    </div>
    <div class="footer">
      <p>Матвеева 270, Бишкек, Кыргызстан</p>
      <p>+996 (700) 000-000</p>
      <div class="social-icons">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/@LetsdefeatautismKG"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-facebook"></i></a>
      </div>
    </div>
  </div>
    </>
  );
}

export default App;
