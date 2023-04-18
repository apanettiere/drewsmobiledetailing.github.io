import React from "react";
import { services } from "../../../Data";
import Services from "./Services";
import { motion } from "framer-motion";
import Accordion from "../Accordion";
import ceramic from "../../../assets/ceramic.png";
import ceramic1 from "../../../assets/ceramic1.png";

const Subjects = () => {
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
    <div className="section" id="services">
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
        className="grid md:grid-cols-3 sm:grid-cols-2 mt-12 gap-8"
      >
        {services.map((service) => {
          return <Services key={service.id} {...service} />;
        })}
      </motion.div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Add On <span className="text-primary">Services</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        <Accordion
          id={1}
          title="Shampoo Treatment"
          content={
            <>
              Shampoo treatment for cloth seats and any carpet in the vehicle!
              The treatment helps recuse smells, remove stains, and maintain
              longevity.
              <br />
              <span className="font-bold text-sm">
                Prices: Sedan/Coup- $30 Suv/Truck- $50
              </span>
            </>
          }
        />
        <Accordion
          id={2}
          title="Steam Clean"
          content={
            <>
              Steam cleaning your vehicle is a great way to remove hard stains
              while sanitizing all surfaces at the same time without any harmful
              chemicals. The interior including carpets, cloths, dash, cup
              holders, air vents, and crevices will be steam cleaned.
              <br />
              <span className="font-bold text-sm">
                Prices: Sedan/Coup- $80 Suv/Truck- $100
              </span>
            </>
          }
        />
        <Accordion
          id={3}
          title="Odor Removal"
          content={
            <>
              This treatment removes all odors that may be present such as
              cigarette, mold, musty, and foul smells. The method used is called
              Ozone treatment. The Ozone treatment is a proven way to remove all
              odors. After the treatment is finished the vehicle will need to
              have the doors open and air out for two hours. After two hours it
              is safe to drive! For the following 4-8 hours there will be the
              slightest "ozone smell". After that time period, the vehicle
              smells new every time! This treatment is certainly the most
              extreme way to ensure all odors are eliminated no matter how
              strong the smell is.
              <br />
              <span className="font-bold text-sm">
                Price: $80 (for all vehicle sizes!)
              </span>
            </>
          }
        />
      </div>
      <div className="text-center text-sm leading-7 max-w-[700px] mx-auto pt-8">
        <div className="grid sm:grid-cols-2 place-items-center gap-8">
          <div className="pl-5">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              <span className="text-primary">Polish</span>
            </div>
            <div className="text-sm leading-7  mb-5">
              <>
                If your paint is looking a little dull, a polish will fix that!
                Polish gives your vehicle a great shine and removes those
                annoying spiderweb scratches. When you get a polish service, we
                always put a beautiful coat of wax on after for free! It will
                break down the clear coat of your paint (to remove the dull look
                and scratches), and the wax will add a layer of protection to
                your paint. A one-step polish process is for vehicles that have
                very light scratches and a slight dull look. A two-step polish
                is for a vehicle that has many light to medium scratches and a
                dull look. Prices may vary slightly due to the size of the
                vehicle. Call or text for estimates
              </>
              <br />
              <span className="font-bold text-md">Pricing: </span>
              <br />
              One-Step Polish: Sedan- $200 SUV/Truck- $240 Two-Step Polish:
              Sedan- $280 SUV/Truck- $340 Call or Text for boats
              <br />
              *Evaluation &amp; Recommendation Upon Arrival*
            </div>
          </div>
          <div className="p-4 md:w-3/4">
            <img src={ceramic1} alt="ceramic" />
          </div>
          <div className="md:w-3/4">
            <img src={ceramic} alt="ceramic" />
          </div>
          <div className="pl-5">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              Graphene Ceramic <span className="text-primary">Coating</span>
            </div>
            <div className="text-sm leading-7 mb-5">
              <>
                A Graphene ceramic coating is the best form of protection
                available today. Ceramic coatings commonly last 2-3 years, but
                thanks to Adam's Polishing Company, the Graphene Ceramic coat is
                the best and longest-lasting product. I use two products rated
                for 7 and 9 years! A graphene ceramic coat is basically a layer
                of glass applied to your paint. This process takes 6-9 hours and
                requires the car to be in the best condition possible before
                applying. A ceramic coat includes a wash, clay bar, polish, prep
                spray, then the graphene ceramic coat is applied. The coating
                can also be applied to glass and rims upon request. Your car
                will look brand new and protected for many years! You can also
                coat the interior! We use specialized ceramic coatings for
                leather, plastics, and vinyls and are rated for two years of
                protection. Pricing will be determined by the condition of the
                vehicle and by size.
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
