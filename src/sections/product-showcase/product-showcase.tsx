"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import donutImage from "@/assets/donut.png";
import { Container } from "@/components/container/container";
import { FeatureCard } from "./components/feature-card";
import { PiLeafBold } from "react-icons/pi";
import { PiTargetBold } from "react-icons/pi";
import { MdOutlineLock } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";
import { motion } from "framer-motion";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <Container>
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
      </Container>
      <div className="flex justify-center">
        <div className="relative">
          <Image src={productImage} alt="Product" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-28 -top-16"
          />
          <Image
            src={donutImage}
            alt="Donut Image"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              Icon={PiLeafBold}
              title="Integration Ecosystem"
              description="Track your progress and motivate your efforts everyday."
            />
            <FeatureCard
              Icon={PiTargetBold}
              title="Goal setting and tracking"
              description="Set and track goals with manageable task breakdowns."
            />
            <FeatureCard
              Icon={MdOutlineLock}
              title="Secure data encryption"
              description="Ensure your data’s safety with top-tier encryption."
            />
            <FeatureCard
              Icon={HiOutlineBell}
              title="Customizable notifications"
              description="Get alerts on tasks and deadlines that matter most."
            />
          </div>
        </Container>
      </div>
    </section>
  );
};
