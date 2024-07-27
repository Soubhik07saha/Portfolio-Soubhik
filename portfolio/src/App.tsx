
import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
  const [Values, setValues] = useState({
    name:"",
    email:"",
    phone:"",
    message:"",
  });
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLInputElement>) =>{
    const {name, value} = e.target;
    setValues({ ...Values, [name]: value});
  }
  const submit = async () =>{
    if(Values.name === "" || Values.email === "" || Values.phone === "" || Values.message === ""){
      alert("All feilds are required");
    }else{
      await axios.post("http://localhost:1000/api/v1/post",Values).then((res) =>{
          alert(res.data.message);
      });
      setValues({
        name:"",
        email:"",
        phone:"",
        message:"",
      });
    }
  }
  return (
    <div>
      {/* <!-- navbar starts --> */}
      <header>
        <a href="#home" className="logo">
          <i className="fab fa-node-js"></i> Soubhik
        </a>

        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Work</a></li>
            {/* <li><a href="#experience">Experience</a></li> */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      {/* <!-- navbar ends --> */}

      {/* <!-- home section starts --> */}
      <section className="home" id="home">
        <div className="content">
          <h2>
            Hi There,<br /> I'm Soubhik <span>Saha</span>
          </h2>
          <p>
            I am into <span className="typing-text"></span>
          </p>
          <a href="#about" className="btn">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down"></i>
          </a>
          <div className="socials">
            <ul className="social-icons">
              <li>
                <a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/soubhik-saha-35829b2a9/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="github" aria-label="GitHub" href="https://github.com/Soubhik07saha" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a className="twitter" aria-label="Twitter" href="https://x.com/Soubhiksaha_" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="instagram" aria-label="Instagram" href="https://www.instagram.com/soubhik_s/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img draggable="false" className="tilt" src="assets/images/soubhik2.jpg" alt="" />
        </div>
      </section>
      {/* <!-- hero section ends --> */}

      {/* <!-- about section starts --> */}
      <section className="about" id="about">
        <h2 className="heading">
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div className="row">
          <div className="image">
            <img draggable="false" className="tilt" src="assets/images/soubhik1.jpg" alt="" />
          </div>
          <div className="content">
            <h3>I'm Soubhik</h3>
            <span className="tag">Full Stack Developer</span>

            <p>
              I am a Full-Stack developer based in Kolkata, India. I am an Electronics and communication undergraduate from Narula Institue of Technology. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. I am also a Java developer.
            </p>

            <div className="box-container">
              <div className="box">
                <p>
                  <span> email : </span> soubhiksaha.etce22.2711@gmail.com
                </p>
                <p>
                  <span> place : </span> Kolkata, India - 741234
                </p>
              </div>
            </div>

            <div className="resumebtn">
              <a href="https://docs.google.com/document/d/1O8uDxH95OW_ICs7AK8GIiMz4oG8h1J6pv59HTClNQSE/edit?usp=drive_link" target="_blank" className="btn">
                <span>Resume</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about section ends --> */}

      {/* <!-- skills section starts --> */}
      <section className="skills" id="skills">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
        </h2>

        <div className="container">
          <div className="row" id="skillsContainer">
            <div className="bar">
              <div className="info">
                <img src="assets/images/java.png" alt="Java" />
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="assets/images/C_Logo.png" alt="C Logo" />
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="assets/images/png-clipart-responsive-web-design-html-world-wide-web-consortium-world-wide-web-angle-text.png" alt="HTML" />
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="assets/images/images.png" alt="CSS" />
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="assets/images/images.jpeg" alt="JavaScript" />
              </div>
            </div>

            <div className="bar">
              <div className="info">
                <img src="assets/images/Mysql_logo.png" alt="MySQL" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- skills section ends --> */}

      {/* <!-- education section starts --> */}
      <section className="education" id="education">
        <h1 className="heading">
          <i className="fas fa-graduation-cap"></i> My <span>Education</span>
        </h1>

        <p className="quote">Success is not the absence of failure, but the persistence to keep going</p>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img draggable="false" src="assets/images/narula.jpeg" alt="Narula Institute of Technology" />
            </div>
            <div className="content">
              <h3>Bachelor of Technology in Electronics and Communication</h3>
              <p>Narula Institute of Technology | NIT</p>
              <h4>2022-2025 | Pursuing</h4>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img draggable="false" src="assets/images/jis-school-of-polytechnic-kalyani.jpg" alt="JIS School of Polytechnic" />
            </div>
            <div className="content">
              <h3>Diploma In Electronics and Telecommunication | Informatic Practices</h3>
              <p>JIS School of Polytechnic | CBSE</p>
              <h4>2019-2022 | Completed</h4>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- education section ends --> */}

      {/* <!-- work project section starts --> */}
      <section className="work" id="work">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
        </h2>

        <div className="box-container">
          {/* Add project boxes here */}
        </div>

        <div className="viewall">
          <a href="/projects" className="btn">
            <span>View All</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
      {/* <!-- work project section ends --> */}

      {/* <!-- contact section starts --> */}
      <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>

      <div className="container">
        <div className="content">
          <div className="image-box">
            <img
              draggable="false"
              src="./assets/images/contact1.png"
              alt="Contact"
            />
          </div>
          <form id="contact-form">
            <div className="form-group">
              <div className="field">
                <input type="text" name="name" placeholder="Name" required value={Values.name} onChange={change}/>
                <i className="fas fa-user"></i>
              </div>
              <div className="field">
                <input type="text" name="email" placeholder="Email" required value={Values.email} onChange={change}/>
                <i className="fas fa-envelope"></i>
              </div>
              <div className="field">
                <input type="text" name="phone" placeholder="Phone" value={Values.phone} onChange={change} />
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="message">
                <input placeholder="Message" name="message" required value={Values.message} onChange={change} />
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="button-area">
              <button type="submit" onClick={submit}>
                Submit <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
      {/* <!-- contact section ends --> */}

      {/* <!-- footer section starts --> */}

      <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Soubhik's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home" className="link-foo"><i className="fas fa-chevron-circle-right"></i> home</a>
          <a href="#about" className="link-foo"><i className="fas fa-chevron-circle-right"></i> about</a>
          <a href="#skills" className="link-foo"><i className="fas fa-chevron-circle-right"></i> skills</a>
          <a href="#education" className="link-foo"><i className="fas fa-chevron-circle-right"></i> education</a>
          <a href="#work" className="link-foo"><i className="fas fa-chevron-circle-right"></i> work</a>
          {/* <a href="#experience"><i className="fas fa-chevron-circle-right"></i> experience</a> */}
        </div>

        <div className="box">
          <h3>contact info</h3>
          <p><i className="fas fa-phone"></i>+91 XXX-XXX-XXXX</p>
          <p><i className="fas fa-envelope"></i>soubhiksaha.etce22.2711@gmail.com</p>
          <p><i className="fas fa-map-marked-alt"></i>Kolkata, India-741234</p>
          <div className="share">
            <a href="https://www.linkedin.com/in/soubhik-saha-35829b2a9/" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://github.com/Soubhik07saha" className="fab fa-github" aria-label="GitHub" target="_blank" rel="noopener noreferrer"></a>
            <a href="mailto:soubhiksaha.etce22.2711@gmail.com" className="fas fa-envelope" aria-label="Mail" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://x.com/Soubhiksaha_" className="fab fa-twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer"></a>
            {/* <a href="https://t.me/lifecode5" className="fab fa-telegram-plane" aria-label="Telegram" target="_blank" rel="noopener noreferrer"></a> */}
          </div>
        </div>
      </div>

      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/jigar-sable"> Soubhik Saha</a>
      </h1>
    </section>
    {/* <!-- footer section ends --> */}

      {/* <!-- scroll top button --> */}
      <a href="#home" aria-label="ScrollTop" className="fas fa-angle-up" id="scroll-top">
      </a>
      {/* <!-- scroll back to top --> */}


    </div>
  );
}

export default App;
