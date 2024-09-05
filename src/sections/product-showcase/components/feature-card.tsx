import { LearnMoreBtn } from "@/components/learn-more-btn/learn-more-btn";

export const FeatureCard = ({
  Icon,
  title,
  description,
}: {
  Icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="px-[45px] py-[40px] flex flex-col justify-start gap-[10px]">
      <div>
        <Icon className="size-6" />
      </div>
      <h3 className="font-bold text-[18px]">{title}</h3>
      <p className="">{description}</p>
      <LearnMoreBtn />
    </div>
  );
};
