import "../styles/Header.scss";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <>
      <nav>
        <h1>$T$</h1>
        <main>
          <HashLink to="/#Home">Home</HashLink>
          <HashLink to="/Contact">Contact</HashLink>
          <HashLink to="/#About">About</HashLink>
          <HashLink to="/#Brands">Brands</HashLink>
          <HashLink to="/Services">Services</HashLink>
        </main>
      </nav>
    </>
  );
};
export default Header;
