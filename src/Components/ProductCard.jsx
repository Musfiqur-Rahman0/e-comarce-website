import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Memoize ProductCard to prevent unnecessary re-renders
const ProductCard = React.memo(({ project }) => {
  return (
    <div>
      <Link to="/order" state={{ image: project.image, title: project.title }}>
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          src={project.image}
          alt={project.title}
          height={400}
          width={200}
          className="rounded-3xl p-2 cursor-pointer"
          onError={(e) => (e.target.src = "fallback-image.jpg")} // Replace with your fallback image path
        />
      </Link>

      <div className="p-4">
        <h3 className="mb-2 text-3xl cursor-pointer tracking-tighter font-bold text-[#1d3557] hover:text-[#003049]">
          {project.title}
        </h3>
        <p className="text-sm text-[#457b9d]/80">{project.description}</p>
      </div>
    </div>
  );
});

export default ProductCard;
