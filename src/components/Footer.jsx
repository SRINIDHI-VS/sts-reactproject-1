import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import '../styles/Footer.scss';
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>STS</h1>
        <p>@All rights reserves-2023</p>
      </div>
      <div>
        <h5>
          Follow us
          <div>
            <a href="https://youtube.com" target={"blank"}>
              <AiFillYoutube />
            </a>
          </div>
          <div>
            <a href="https://instagram.com" target={"blank"}>
              <AiFillInstagram />
            </a>
          </div>
          <div>
            <a href="https://facebook.com" target={"blank"}>
              <AiFillFacebook />
            </a>
          </div>
        </h5>
      </div>
    </footer>
  );
};
   
export default Footer;
