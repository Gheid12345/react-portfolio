import "./Portfolio.css";
import Navbar from "./Navbar";
import photo6 from "./img/photo6.png"
import photo7 from "./img/photo7.PNG"
import photo1 from "./img/photo1.png"
import photo2 from "./img/photo2.png"
const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-none">
      <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Portfolio 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            <h2>Projects</h2>
            <hr />
          <div className="col">
          <img className="one" src={photo6} />
          <h4 className="mt-5">Calculator Project</h4>
          </div>
          <div className="col">
          <img className="two" src={photo7} />
          <h4 className="mt-5">My React Project</h4>
          </div>
          <div className="col">
          <img className="three" src={photo1} />
          <h4 className="mt-5">Frontend Project</h4>
          </div>
          <div className="col">
          <img className="four" src={photo2} />
          <h4 className="mt-5">Frontend Project</h4>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
