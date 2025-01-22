

import React from "react";
import { RiFacebookLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import Image from "next/image";

import Letter from "./Letter";



 function Footer() {


  return (
    <div className="bg-customGray text-primary absolute mt-8 ">
      <Letter />
      {/* Footer Container */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-24 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Section 1 */}
        <div>
          <h1 className="text-3xl font-poppins font-medium">  SHOP.CO  </h1>
          <p className="text-[12px] mb-4 font-poppins">
            We have clothes that suit your style and which you are proud to wear.
            From women to men.
            {/* {data.description} */}
          </p>

          {/* Icons */}
          {/* <div className="flex gap-4 mt-5">
            <div className="hover:bg-primary hover:text-maintext bg-maintext p-2 rounded-full">
              <CiTwitter />
            </div>
            <div className="hover:bg-primary hover:text-maintext bg-maintext p-2 rounded-full">
              <RiFacebookLine />
            </div>
            <div className="hover:bg-primary hover:text-maintext bg-maintext p-2 rounded-full">
              <FaInstagram />
            </div>
            <div className="hover:bg-primary hover:text-maintext bg-maintext p-2 rounded-full">
              <FaGithub />
            </div>
          </div> */}


<div className="flex gap-4 mt-5">
  <Link
    href="https://twitter.com/yourprofile"
    className="hover:bg-primary hover:text-maintext bg-maintext p-2 rounded-full"
  >
    <CiTwitter />
  </Link>
  <Link
    href="https://facebook.com/yourprofile"
    className="hover:bg-primary hover:text-maintext bg-maintext p-2 rounded-full"
  >
    <RiFacebookLine />
  </Link>
  <Link
    href="https://instagram.com/yourprofile"
    className="hover:bg-primary hover:text-maintext bg-maintext p-2 rounded-full"
  >
    <FaInstagram />
  </Link>
  <Link
    href="https://github.com/yourprofile"
    className="hover:bg-primary hover:text-maintext bg-maintext p-2 rounded-full"
  >
    <FaGithub />
  </Link>
</div>


        </div>


        {/* Company Section */}
        <div>
          <h1 className="text-xl font-poppins font-medium mb-4">Company</h1>
          <ul className="list-none space-y-2">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h1 className="text-xl font-poppins font-medium mb-4">Help</h1>
          <ul className="list-none space-y-2">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div>
          <h1 className="text-xl font-poppins font-medium mb-4">FAQ</h1>
          <ul className="list-none space-y-2">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h1 className="text-xl font-poppins font-medium mb-4">Resources</h1>
          <ul className="list-none space-y-2">
            <li>Free eBooks</li>
            <li>Development Tutorials</li>
            <li>How-to Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 px-6 py-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        {/* All Rights Reserved */}
        <div className="flex items-center gap-2">
          <p className="font-poppins font-medium text-[12px]">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 sm:mt-0">
          <Image src="/Footer.png" alt="Footer Logo" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Footer;










