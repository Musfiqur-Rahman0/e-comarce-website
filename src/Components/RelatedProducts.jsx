import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { PRODUCTS } from "../consents";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: "15px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        centerPadding: "15px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        centerPadding: "10px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        centerPadding: "5px",
      },
    },
  ],
};

const RelatedProducts = () => {
  const navigate = useNavigate();

  const handleProductClick = (data) => {
    window.scrollTo(0, 0); // Scroll to the top
    navigate("/order", {
      state: { image: data.image, title: data.title },
    });
  };

  return (
    <div>
      {/* Related Products Section */}
      <div className="container pt-5">
        <div className="sm:pl-8 pl-6">
          <h2 className="text-2xl font-semibold tracking-tighter text-slate-600">
            More with the design
          </h2>
        </div>
        <Slider {...settings}>
          {PRODUCTS.map((data, index) => (
            <div key={index} className="p-4">
              <Link
                to="/order"
                state={{ image: data.image, title: data.title }}
                onClick={() => handleProductClick(data)}
              >
                <img
                  className="rounded-lg"
                  src={data.image}
                  alt={data.title}
                  height={150}
                  width={200}
                />
              </Link>
              <div className="flex pt-4">
                <div>
                  <h2 className="text-xl font-semibold">{data.title}</h2>
                  <p className="text-sm text-gray-400 pt-2 line-clamp-2">
                    {data.description}
                  </p>
                </div>
                <div>
                  <span className="text-xl lg:text-2xl tracking-tighter">
                    2.99$
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* You May Also Like Section */}
      <div className="container pt-20">
        <div className="sm:pl-8 pl-6">
          <h2 className="text-2xl font-semibold tracking-tighter text-slate-600">
            You may also like
          </h2>
        </div>
        <Slider {...settings}>
          {PRODUCTS.map((data, index) => (
            <div key={index} className="p-4">
              <Link
                to="/order"
                state={{ image: data.image, title: data.title }}
                onClick={() => handleProductClick(data)}
              >
                <img
                  className="rounded-lg"
                  src={data.image}
                  alt={data.title}
                  width={200}
                  height={150}
                />
              </Link>
              <div className="flex pt-4">
                <div>
                  <h2 className="text-xl font-semibold">{data.title}</h2>
                  <p className="text-sm text-gray-400 pt-2 line-clamp-2">
                    {data.description}
                  </p>
                </div>
                <div>
                  <span className="text-xl lg:text-2xl tracking-tighter">
                    2.99$
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProducts;
