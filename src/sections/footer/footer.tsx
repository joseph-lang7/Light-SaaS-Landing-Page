import { Container } from "@/components/container/container";
import { LogoIcon } from "@/components/icons/icons";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { productLinks, companyLinks, resourcesLinks, legalLinks } from "@/data";

export const Footer = () => {
  return (
    <footer className="bg-black text-sm py-10">
      <Container>
        <div className="md:flex md:justify-between">
          <div className="flex flex-col gap-5 mb-[72px] md:mb-0 max-w-[240px] md:justify-between">
            <div className="flex flex-col gap-5">
              <LogoIcon />
              <p className="text-[#808080]">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website.
              </p>
            </div>
            <div className="flex gap-2 text-[#808080]">
              <FaXTwitter className="h-6 w-6 footer-link cursor-pointer" />
              <AiFillInstagram className="h-6 w-6 footer-link cursor-pointer" />
              <FaPinterest className="h-6 w-6 footer-link cursor-pointer" />
              <FaLinkedin className="h-6 w-6 footer-link cursor-pointer" />
              <FaTiktok className="h-6 w-6 footer-link cursor-pointer" />
              <FaYoutube className="h-6 w-6 footer-link cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <div>
              <div>
                <h4 className="text-white font-bold pb-3">Product</h4>
                <div className="flex flex-col gap-3">
                  {productLinks.map((title, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[#7B7B7B] footer-link"
                    >
                      {title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-white font-bold pb-3">Product</h4>
                <div className="flex flex-col gap-3">
                  {companyLinks.map((title, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[#7B7B7B] footer-link"
                    >
                      {title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-white font-bold pb-3">Product</h4>
                <div className="flex flex-col gap-3">
                  {resourcesLinks.map((title, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[#7B7B7B] footer-link"
                    >
                      {title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-white font-bold pb-3">Product</h4>
                <div className="flex flex-col gap-3">
                  {legalLinks.map((title, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[#7B7B7B] footer-link"
                    >
                      {title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
