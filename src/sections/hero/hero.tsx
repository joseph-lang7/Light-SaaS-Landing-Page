import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import { Container } from "@/components/container/container";
import { LearnMoreBtn } from "@/components/learn-more-btn/learn-more-btn";
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_75%)] overflow-x-clip">
      <Container>
        <div className="md:flex items-center ">
          <div className="md:flex-1">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.{" "}
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <LearnMoreBtn />
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative max-w-[648px]">
            <Image
              src={cogImage}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              alt="cylinder image"
              width={220}
              height={220}
              className="hidden md:block -top-5 -left-32 md:absolute "
            />
            <Image
              src={noodleImage}
              alt="noodle image"
              width={220}
              className="hidden md:block absolute top-[534px] left-[380px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
