import React from "react";
import { motion } from "framer-motion";
import Accordion from "../Accordion";

const Services = ({ image, title, content }) => {
  const item = {
    hidden: { y: 0, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex items-center flex-col gap-4 bg-white p-8 rounded-md"
    >
      <div>
        <img src={image} alt={title} />
        <Accordion id={1} title={title} content={content} />
      </div>
    </motion.div>
  );
};

export default Services;
