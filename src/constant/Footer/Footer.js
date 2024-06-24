import Link from "next/link";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Image from "next/image";
import image from "../Images/image";

const Footer = () => {
  return (
    <footer className="pt-12 footer-bg relative">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="flex justify-between items-center md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start">
          <div className="flex-1">
            <h2 className="text-white text-2xl md:text-3xl font-medium">
              Interested To Get Our Featured Service
            </h2>
          </div>
          <div>
            <a href="tel:+917906514988">
              <button className="primary-btn shadow-lg">Call us Now</button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-y-8 pt-20">
          <div className="lg:pr-8 text-center md:text-start">
            <p className="text-base mt-4 text-slate-200 hover:text-white transition-all duration-300">
              With 8 years of web and app development skills, we have worked on 100+ Internet development projects. We are a part of BroLabs Innovation Pvt. Ltd., and we are 38 people working together as a team with just one goal: to take your business to a new level.
            </p>

            <div className="mx-auto text-center md:text-start">
              <div>
                <div className="pb-50 pb-md-25 animate get-bottom">
                  <h3 className="text-white text-capital text-xl font-medium mb-6">
                    Get In Touch
                  </h3>
                </div>
                <ul>
                  <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                    <a
                      className="text-sm text-white font-bold flex items-center justify-center md:justify-start gap-2"
                      href="tel:+911234567890"
                    >
                      <FaPhoneSquareAlt /> +91-1234567890
                    </a>
                  </li>
                  <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                    <a
                      className="text-sm text-white font-bold flex items-center justify-center md:justify-start gap-2"
                      href="mailto:webdevstudio1@gmail.com"
                    >
                      <FaEnvelope /> webdevstudio1@gmail.com
                    </a>
                  </li>
                  <li className="mt-8">
                    <ul className="flex justify-start gap-4 items-center">
                      <li className="social">
                        <a className="social-icon" href="#">
                          <FaFacebook />
                        </a>
                      </li>
                      <li className="social">
                        <a className="social-icon" href="#">
                          <FaTwitter />
                        </a>
                      </li>
                      <li className="social">
                        <a className="social-icon" href="#">
                          <FaInstagram />
                        </a>
                      </li>
                      <li className="social">
                        <a className="social-icon" href="#">
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
        <a href="#" className="shadow-lg rounded-full p-2 bg-white absolute bottom-[5%] right-[5%] animate-[bounce_2s_ease-in-out_infinite]">
          <ChevronUpIcon className="h-6 w-6" />
        </a> 
      */}
    </footer>
  );
};

export default Footer;
