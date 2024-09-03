import Header from "@/sections/header/header";
import { Hero } from "@/sections/hero/hero";
import { LogoTicker } from "@/sections/logo-ticker/logo-ticker";
import { ProductShowcase } from "@/sections/product-showcase/product-showcase";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
    </>
  );
}
