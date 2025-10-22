import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-6">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">Branding</a></li>
            <li><a className="link link-hover">Design</a></li>
            <li><a className="link link-hover">Marketing</a></li>
            <li><a className="link link-hover">Advertisement</a></li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">About us</a></li>
            <li><a className="link link-hover">Contact</a></li>
            <li><a className="link link-hover">Jobs</a></li>
            <li><a className="link link-hover">Press kit</a></li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">Terms of use</a></li>
            <li><a className="link link-hover">Privacy policy</a></li>
            <li><a className="link link-hover">Cookie policy</a></li>
          </ul>
        </div>

        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Follow Us</h6>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
          <p className="text-sm text-gray-300">Subscribe to our newsletter for updates.</p>
          <input
            type="email"
            placeholder="Your email"
            className="mt-2 p-2 rounded w-full text-black"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6"></div>

      {/* Bottom bar */}
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Nobin. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-500">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-pink-500">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
