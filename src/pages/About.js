import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/immggg2-015.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                ABOUT PAGE 
              </h1>
            </div>
          </div>
        </div>
      </div>
      <body>
  <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
</body>
      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow mt-5 p-5">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card shadow mb-3 p-3">
                <h4 className="text-dark about-me">About Me</h4>
              <p> My name is Diegh Ann P. Prebano, and I am 23 years old. I am currently pursuing a Bachelor of Science in Information Technology (BSIT) at Central Philippines State University (CPSU). I am committed to my studies and have a passion for reading novels and Wattpad stories, especially those featuring fictional characters.. </p>
              <p> </p>
                </div>
                <div className="card shadow p-3">
                <h4 className="text-dark about-me">Academic Achievements </h4>
              <p> Primary: Tampalon Elementary School S.Y:2014 <br /> Secondary: Junior Tampalon National High School S.Y:2017 <br />Senior High: Tampalon National High School Senior  S.Y:2020 <br />Tretiary:Central Philippines State University (CPSU)SY:2024</p>
              <p> </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
