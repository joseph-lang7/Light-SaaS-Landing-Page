import { Container } from "@/components/container/container";
import pipeFigureImage from "@/assets/pipe-figure.png";
import cubeImage from "@/assets/cube.png";
import Image from "next/image";
import { FeatureCard } from "./components/feature-card";
export const EverythingYouNeed = () => {
  return (
    <section className="bg-white pb-[144px]">
      <Container>
        <div className="py-[92px]">
          <div className="section-heading">
            <div className="flex justify-center">
              <div className="tag">Everything you need</div>
            </div>
            <h2 className="section-title mt-5">
              Streamlined for easy management
            </h2>
            <p className="text-center max-w-[600px] mt-5">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row items-center lg:justify-center">
          <FeatureCard
            src={pipeFigureImage.src}
            title="Integration Ecosystem"
            description="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
          />
          <FeatureCard
            src={cubeImage.src}
            title="Goal setting and tracking"
            description="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
          />
        </div>
      </Container>
    </section>
  );
};

export default EverythingYouNeed;
