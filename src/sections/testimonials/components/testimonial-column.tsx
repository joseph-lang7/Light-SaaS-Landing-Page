import { testimonialType } from "@/data";
import Image from "next/image";
export const TestimonialColumn = ({
  testimonials,
  className,
}: {
  testimonials: testimonialType[];
  className?: string;
}) => {
  return (
    <div
      className={`[mask-image:linear-gradient(to_bottom,transparent,white_25%,white_75%,transparent)] ${className}`}
    >
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
    </div>
  );
};
