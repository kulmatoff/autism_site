import { useState, useEffect } from "react";

function App() {
  // const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);

  return (
    <>
      <header>
        <div id="header-left_side">logo</div>
        <div id="header-right_side">
          <div className="header-right_side-button"></div>
          <div className="header-right_side-button"></div>
          <div className="header-right_side-button"></div>
          <button className="header-right_side-contact">Contact</button>
        </div>
      </header>
      <div>
        {/* {loading} */}
        {
          <h1 className="title">
            We will<br></br>overcome<br></br>autism
          </h1>
        }
      </div>
    </>
  );
}

export default App;
