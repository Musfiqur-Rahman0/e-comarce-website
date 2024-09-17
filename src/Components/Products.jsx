import React, { Suspense, lazy } from "react";
import { PRODUCTS } from "../consents";
import { motion } from "framer-motion";

// Lazy load the ProductCard component
const ProductCard = lazy(() => import("./ProductCard"));

const Products = () => {
  return (
    <section
      id="dishes"
      className="container py-10 mx-auto border-b border-red-800"
    >
      <h2 className="mb-8 tracking-tight text-3xl font-bold text-center text-[#e63946]">
        Our Products
      </h2>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4">
          {PRODUCTS.map((project, index) => (
            <ProductCard key={index} project={project} />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default Products;
