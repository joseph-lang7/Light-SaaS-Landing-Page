"use client";
import { Container } from "@/components/container/container";
import { CheckIcon } from "@/components/icons/icons";
import { pricingTiers } from "@/data";
import { pricingTierType } from "@/data";
import { motion } from "framer-motion";
export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 items-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }: pricingTierType) => (
              <div
                className={`${
                  inverse && "border-black bg-black text-white"
                } card`}
                key={title}
              >
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-black/50">{title}</h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "-100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDf,#E1CD86,#BBCB92,#71C2Ef,#3BFFFF,#DD7DDf,#DD7DDf,#E1CD86,#BBCB92,#71C2Ef,#3BFFFF,#DD7DDf)] [background-size:200%] bg-clip-text text-transparent font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl tracking-tighter font-bold leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={`${
                    inverse ? "btn-secondary" : "btn-primary"
                  } btn w-full mt-[30px]`}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <span>
                        <CheckIcon fill={inverse ? "white" : "black"} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};
