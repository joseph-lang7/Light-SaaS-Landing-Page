import Header from "@/sections/header/header";
import { Hero } from "@/sections/hero/hero";
import { LogoTicker } from "@/sections/logo-ticker/logo-ticker";
import { ProductShowcase } from "@/sections/product-showcase/product-showcase";
import { Pricing } from "@/sections/pricing/pricing";
import { Testimonials } from "@/sections/testimonials/testimonials";
import { CallToAction } from "@/sections/call-to-action/call-to-action";
import { Footer } from "@/sections/footer/footer";
import { EverythingYouNeed } from "@/sections/everything-you-need/everything-you-need";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <EverythingYouNeed />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
