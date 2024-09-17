import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

import products1 from "../assets/landingPageimg6.jpg";
import products2 from "../assets/landingPageim3.jpg";
import products3 from "../assets/pexels-gabby-k-5996980.jpg";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaDotCircle } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";

import RelatedProducts from "./RelatedProducts";
import Navber from "./Navber";

const Order = () => {
  const location = useLocation();
  const { image, title } = location.state || {};
  const [selectedImage, setSelectedImage] = useState(image || products1);

  const [isActive, setIsActive] = useState(null);
  const [message, setMessage] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (image) => {
    window.scrollTo(0, 0);
    setSelectedImage(image);
  };

  const handleSizeSelection = (size) => setIsActive(size);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessage("Item added to the cart!");
  };
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="container mx-auto">
      <Navber />
      <div className="grid lg:grid-cols-2 gap-10 overflow-x-hidden pt-20">
        {/* Products Section Images */}
        <div className="flex flex-col items-center pt-5 basis-[70%]">
          {/* Hero Image */}
          <div className="w-[80%]">
            <img
              className="object-cover h-[400px] w-full rounded-lg"
              src={selectedImage}
              alt={title || "Selected product"}
            />
          </div>
          {/* Small Images */}
          <div className="flex pt-5 gap-4 px-10">
            <img
              className={`object-cover h-24 w-24 rounded-lg ${
                selectedImage === products1 ? "border-2 border-blue-500" : ""
              }`}
              src={products1}
              alt="Product 1"
              onClick={() => handleImageClick(products1)}
            />
            <img
              className={`object-cover h-24 w-24 rounded-lg ${
                selectedImage === products2 ? "border-2 border-blue-500" : ""
              }`}
              src={products2}
              alt="Product 2"
              onClick={() => handleImageClick(products2)}
            />
            <img
              className={`object-cover h-24 w-24 rounded-lg ${
                selectedImage === products3 ? "border-2 border-blue-500" : ""
              }`}
              src={products3}
              alt="Product 3"
              onClick={() => handleImageClick(products3)}
            />
          </div>
        </div>

        {/* Products Section Details */}
        <div className="px-4 grid basis-[30%] pt-5">
          <div className="flex gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-slate-800">
                {title}
              </h2>
              <p className="text-sm text-gray-400 tracking-tight">
                Product information
              </p>
            </div>
            <p className="pt-[6px]">
              <span className="text-xl font-bold">22.99$</span>
            </p>
          </div>
          <form className="mt-6" onSubmit={handleFormSubmit}>
            {/* Color Options */}
            <div>
              <h3 className="text-slate-700 text-2xl font-bold mb-2">
                Vintage Color
              </h3>
              <div className="inline-flex flex-wrap gap-2">
                <button
                  onClick={() => handleColorSelection("black")}
                  className={`h-5 w-5 bg-black rounded-full ${
                    selectedColor === "black" ? "border-4 border-slate-500" : ""
                  }`}
                  type="button"
                ></button>
                <button
                  onClick={() => handleColorSelection("gray")}
                  className={`h-5 w-5 bg-gray-400 rounded-full ${
                    selectedColor === "gray" ? "border-2 border-slate-600" : ""
                  }`}
                  type="button"
                ></button>
              </div>
            </div>
            {/* Size Options */}
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="text-sm text-slate-400">Size</label>
                <button className="text-sm text-slate-400">Size Guide</button>
              </div>
              <div className="flex flex-wrap flex-row gap-5 mt-3">
                {["S", "M", "L", "XL", "XXL", "3XL"].map((size, index) => (
                  <div
                    key={index}
                    className="border-2 cursor-pointer border-blue-600 h-12 w-20 rounded-lg inline-flex items-center justify-center"
                  >
                    <motion.label
                      initial={{ opacity: 1, backgroundColor: "transparent" }}
                      animate={{
                        backgroundColor:
                          isActive === size ? "blue" : "transparent",
                        color: isActive === size ? "white" : "black",
                      }}
                      whileTap={{
                        opacity: 1,
                        backgroundColor: "blue",
                        color: "white",
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "lightblue",
                      }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleSizeSelection(size)}
                      className="w-full h-full rounded-lg text-center flex items-center justify-center"
                    >
                      {size}
                    </motion.label>
                  </div>
                ))}
              </div>
            </div>
            {/* Add to Cart Button */}
            <div className="pt-10">
              <button
                className="w-full bg-blue-600 py-4 rounded-lg text-white hover:bg-blue-700"
                type="submit"
              >
                Add to cart
              </button>
              {message && (
                <div className="mt-4 flex justify-center gap-2 items-center py-5 text-2xl text-green-600">
                  <AiOutlineCheckCircle className="text-2xl " />
                  <span>{message}</span>
                </div>
              )}
            </div>
          </form>
          {/* Return Policy */}
          <div className="py-4 mx-auto flex gap-2 text-center">
            <RiShieldCheckFill className="text-blue-500 h-6 w-10" />
            <span className="text-[18px] tracking-tighter">
              30 days easy return policy
            </span>
            <a className="underline text-[18px]" href="">
              Learn more
            </a>
          </div>
          {/* Description, Product Details, Shipping Info */}
          <section id="description" className="flex flex-col gap-4">
            {["Description", "Product details", "Shipping info"].map(
              (section) => (
                <div
                  key={section}
                  className="border-b-black border-dotted border-[1px] pb-10"
                >
                  <button className="w-full text-xl tracking-tighter font-semibold flex items-center justify-between">
                    {section}
                    <MdAdd />
                  </button>
                  <p className="text-gray-400 mt-2">
                    - Solids: 100% Cotton; Sport Grey: 90% Cotton, 10%
                    Polyester.
                  </p>
                </div>
              )
            )}
            {/* Report Product */}
            <div className="flex items-center gap-2 justify-center">
              <FaDotCircle className="text-gray-500" />
              <a className="text-gray-600 tracking-tighter text-xl">
                Report this product
              </a>
            </div>
          </section>
        </div>
      </div>

      <RelatedProducts onProductClick={handleImageClick} />
      <Footer />
    </div>
  );
};

export default Order;
