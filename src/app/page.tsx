import Header from "@/sections/header/header";
import { Hero } from "@/sections/hero/hero";
import { LogoTicker } from "@/sections/logo-ticker/logo-ticker";
import { ProductShowcase } from "@/sections/product-showcase/product-showcase";
import { Pricing } from "@/sections/pricing/pricing";
import { Testimonials } from "@/sections/testimonials/testimonials";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
    </>
  );
}
