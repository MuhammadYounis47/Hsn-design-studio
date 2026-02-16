import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 mt-8 border-t-2 border-white">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
          
          {/* Logo and Description */}
          <div className="md:w-1/4">
            <h2 className="text-3xl font-bold text-white mb-4">HSN<span className="text-[#99A1AF]">Design</span></h2>
            <p className="text-gray-400 leading-relaxed">
              Delivering innovative digital solutions to help your business grow and shine online.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/5">
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-violet-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-violet-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-violet-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-violet-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/4">
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <p>
              Email:{' '}
              <a
                href="mailto:info@hsndesign.com"
                className="hover:text-violet-500 transition"
              >
                info@hsndesign.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+1234567890" className="hover:text-violet-500 transition">
                +1 (234) 567-890
              </a>
            </p>
            <p className="mt-2 max-w-xs whitespace-pre-line">
              123 hsn design, Suite 456{'\n'}
              San Francisco, CA 94107{'\n'}
              United States
            </p>
          </div>

          {/* Social Media */}
          <div className="md:w-1/5">
            <h3 className="text-xl font-semibold mb-6 text-white">Follow Us</h3>
            <div className="flex space-x-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-violet-500 transition text-2xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-violet-500 transition text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-violet-500 transition text-2xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-violet-500 transition text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Arnold Street Agency. All rights reserved. |{' '}
          <a href="#privacy" className="hover:text-violet-500 transition">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#terms" className="hover:text-violet-500 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
