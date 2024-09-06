import Image from "next/image";

export const FeatureCard = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full rounded-xl border shadow-2xl p-[40px] flex flex-col items-center max-w-[486px] max-h-[538px]">
      <Image src={src} alt="Pipe Figure" width={329} height={329} />
      <h3 className="card-title">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};
