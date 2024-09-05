import { testimonials } from "@/data";
import { Container } from "@/components/container/container";
import { TestimonialColumn } from "./components/testimonial-column";
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white py-0">
      <Container>
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <h2 className="section-title mt-5">What our users say</h2>
        <div className="flex justify-center gap-6">
          <TestimonialColumn testimonials={firstColumn} />
          <TestimonialColumn
            testimonials={secondColumn}
            className="hidden md:block"
          />
          <TestimonialColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
          />
        </div>
      </Container>
    </section>
  );
};
