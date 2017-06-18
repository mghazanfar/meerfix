import React from 'react';
import Slider from 'react-slick';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import imge1 from "./1.jpg";
import imge2 from "./2.jpg";
import imge3 from "./3.jpg";
import imge4 from "./4.jpg";
import imge5 from "./5.jpg";
import imge6 from "./6.jpg";


export default class SimpleSlider extends React.Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: 'linear'
    };
    return (
      <Slider className="your-class" {...settings}>
        <div><img width="100%" src={imge2}  /></div>
        <div><img width="100%" src={imge1}  /></div>
        <div><img width="100%" src={imge3}  /></div>
        <div><img width="100%" src={imge4}  /></div>
        <div><img width="100%" src={imge5}  /></div>
        <div><img width="100%" src={imge6}  /></div>
      </Slider>
    );
  }
}
