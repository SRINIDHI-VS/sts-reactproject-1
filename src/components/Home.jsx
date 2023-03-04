import "../styles/Home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="Home" id='Home'>
        <main>
          <h1>STS</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="Home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="Home3" id="About">
        <div>
          <h1>Who are we?</h1>
          <p>
            At Shree Tech Solutions, we are a team of technology experts
            dedicated to providing innovative solutions to our clients'
            technological challenges. With years of experience in software
            development, web design, cybersecurity, and artificial intelligence,
            we have helped numerous businesses and organizations to optimize
            their technological capabilities and achieve their goals. Our
            mission is to deliver cutting-edge technology solutions that meet
            our clients' needs and exceed their expectations. Our team is made
            up of highly skilled professionals who are passionate about
            technology and committed to delivering exceptional results. We pride
            ourselves on our ability to understand our clients' unique
            requirements and to develop customized solutions that are tailored
            to their specific needs. Whether you need a custom software
            application, a new website, or help securing your IT infrastructure,
            we have the expertise and experience to help you achieve your goals.
          </p>
        </div>
      </div>

      <div className="Home4" id="Brands" >
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:'0.3s'}}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{animationDelay:'0.5s'}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:'0.7s'}}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{animationDelay:'0.9s'}}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default Home;
