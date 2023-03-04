import { Carousel } from "react-responsive-carousel";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Services = () => {
  return (
    <>
      <div className="Services">
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false}
        interval={1000}
        showThumbs={false}
        showIndicators={false}>
          <div>
            <img src={img3} alt="Item-1" />
            <p className="legend">Full Stack</p>
          </div>
          <div>
            <img src={img4} alt="Item-2" />
            <p className="legend">Peer-to-SUpport</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Services;
