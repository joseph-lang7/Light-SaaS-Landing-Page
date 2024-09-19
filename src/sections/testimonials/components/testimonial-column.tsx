import { testimonialType } from "@/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialColumn = ({
  testimonials,
  className,
  duration,
}: {
  testimonials: testimonialType[];
  className?: string;
  duration?: number;
}) => {
  return (
    <div className={` ${className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 12,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(
                ({ comment, avatarSrc, name, username }: testimonialType) => (
                  <div className="card" key={comment}>
                    <div>{comment}</div>
                    <div className="flex items-center gap-2 mt-5">
                      <Image
                        src={avatarSrc}
                        alt={name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <div className="font-medium tracking-tight leading-5">
                          {name}
                        </div>
                        <div className="leading-5 tracking-tight">
                          <span>@</span>
                          {username}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
