import "./Experience.css";
import Navbar from "./Navbar";
import img3 from "./img/img3.jpeg"
import img4 from "./img/img4.jpeg"
import img5 from "./img/img5.jpeg"
import photo4 from "./img/photo4.jpeg"
import photo5 from "./img/photo5.jpeg"
import img6 from "./img/img6.jpeg"
import photo9 from "./img/photo9.JPG"
import Achievement2 from "./img/Achievement2.jpeg"
import photo3 from "./img/photo3.jpg"
import Achievement1 from "./img/Achievement1.jpeg"


const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="">
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
                Experience Page
              </h1>
            </div>
          </div>
        </div>
      </div>

     <div className="exp">
      <div className="container">
        <hr/>
        <div className="row mb-5">
          <h2 className="fw-bold display-4 text-center">On-The Job Training</h2>
          <hr/>
          <div className="col-lg-6 text-center">
            <img className="one" src={img3} />
            <h4 >Creating book pocket for the new book</h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={img4} />
            <h4 >Scanning the barcode for inventory </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={img5} />
            <h4>Arrange the book by the call number </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={photo4} />
            <h4 >Arrange the library ID by alphabitical </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={photo5} />
            <h4 > Listing the title of books </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={img6} />
            <h4 >Listing the name of student</h4>
          </div>
        </div>
        <hr />
        <div className="row mb-5">
          <h3 className="fw-bold display-4 text-center">Achievements</h3>
          <hr/>
          <div className="col-lg-6">
            <img className="one" src={photo9} />
            <h4> Colloquium 2024 2nd place Certificate </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={Achievement2} />
            <h4 >3rd Colloquium 2024 2nd Place</h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={photo3} />
            <h4 >Certificate of OJT</h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={Achievement1} />
            <h4 >3rd Colloquium 2024 2nd Place </h4>
          </div>
        </div>
      </div>
     </div>

           
    </>
  );
};

export default Experience;


