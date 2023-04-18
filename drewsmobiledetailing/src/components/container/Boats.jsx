import React from "react";
import boat from "./../../assets/boat.png";
import { boats } from "../../Data";
import Services from "./Course/Services";
import { motion } from "framer-motion";

const Boats = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="section" id="boats">
      <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-center">
        <span className="text-primary">Boats</span>
      </div>
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="md:w-3/4">
          <img src={boat} alt="boat" />
        </div>
        <div className="pl-5">
          <div className="pl-5">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              Graphene Ceramic <span className="text-primary">Coating</span>
            </div>
            <p className="text-sm leading-7 mb-5">
              Please call or text 239-300-1782 to set up an appointment. Our
              Graphine will last 3+ years in exposed conditions and expect much
              longer if kept covered and away from salt! Prices Range from
              $78-85 a foot
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our <span className="text-primary">Services</span>
        </div>
        <p className="text-sm leading-7 max-w-[700px] mx-auto"></p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {boats.map((boats) => {
          return <Services key={boats.id} {...boats} />;
        })}
      </motion.div>
    </div>
  );
};

export default Boats;
