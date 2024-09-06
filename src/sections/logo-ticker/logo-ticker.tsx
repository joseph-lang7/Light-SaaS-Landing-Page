"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { logoTickerLogos } from "@/data";
export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <>
                  {logoTickerLogos.map((logo, idx) => (
                    <Image
                      key={idx}
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={100}
                      className="logo-ticker-image"
                    />
                  ))}
                </>
              )),
            ]}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
