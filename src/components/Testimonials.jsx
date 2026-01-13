import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tendai from "../assets/tendai.jpg";
import Chipo from "../assets/chipo.jpg";
import Danmore from "../assets/danmore.jpg";
import Yu from "../assets/yu.jpg";
import Tafadzwa from "../assets/tafadzwa.jpg";
import Thelma from "../assets/Thelma.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Tendai Ndlovu",
    text: "Afro-Solar transformed our home with their professional design and installation service. We've seen a 70% reduction in our electricity bills and the system has been incredibly reliable. I highly recommend their maintenance packages to keep everything running smoothly long-term.",
    img: Tendai,
  },
 
  {
    id: 3,
    name: "Tafadzwa Sibanda",
    text: "The team's expertise in solar installation is unmatched. They handled our complex setup with ease, and their ongoing support through maintenance and repair services has been outstanding. We're now considering expanding with their battery storage for even greater energy independence.",
    img: Tafadzwa,
  },
   {
    id: 6,
    name: "Thelma Gomba",
    text: "Afro-Solar's solar solutions have revolutionized our community's energy landscape. Their expert team provided top-notch installation and training, enabling us to harness clean energy affordably. Their commitment to education and support is truly inspiring!",
    img: Thelma,
  },
  {
    id: 4,
    name: "Brian Yu",
    text: "Afro-Solar's commitment to quality and customer satisfaction is evident in every interaction. Their system monitoring tools have helped us maximize our solar investment, and I appreciate how they upsell additional services that genuinely add value rather than just pushing products.",
    img: Yu,
  },
   {
    id: 2,
    name: "Chipo Moyo",
    text: "As a small business owner, going off-grid with Afro-Solar's complete solution was a game-changer. Their energy audit helped us optimize our setup, and the battery storage ensures we never lose power. Their monitoring service gives me peace of mind with real-time insights.",
    img: Chipo,
  },
  {
    id: 5,
    name: "Danmore Sithole",
    text: "Switching to Afro-Solar was the best decision for our family. Their solar panels have cut our energy costs in half, and the installation was seamless. Highly recommend their eco-friendly solutions!",
    img: Danmore,
  },
 
];

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setSlidesToShow(1);
      } else if (width <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <section data-aos="fade-up" data-aos-duration="300" className="py-10 bg-gray-900">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h3 className="text-3xl text-white p-4 font-bold">Testimonial</h3>
            <p className="text-md text-gray-600 dark:text-gray-400">
              Hear what our satisfied customers have to say about our solar solutions and services.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-full md:max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div
                      className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4
                     rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        src={img}
                        alt={`Portrait of ${name}, a satisfied Afro-Solar customer`}
                        className="rounded-full w-[120px] block mx-auto"
                      />
                      <h4 className="text-xl text-white font-bold">{name}</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{text}</p>
                      <p className="text-gray-400 dark:text-gray-500 text-9xl font-serif absolute top-0 right-0" aria-hidden="true">
                        "
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      <hr className="h-10 bg-gray-800" />
    </>
  );
};

export default Testimonial;
