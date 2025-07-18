"use client";
import Link from "next/link";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";
import { useEffect, useState } from "react";
import { getFooterData } from "@/services/apiService";

const footer = () => {
  type FooterType = {
    address: string;
    phone: string;
    email: string;
    copyright: string;
  };
  const [footerData, setFooterData] = useState<FooterType | null>(null);

  useEffect(() => {
    getFooterData<FooterType>()
      .then((data) => setFooterData(data))
      .catch(() => setFooterData(null));
  }, []);

  if (!footerData)
    return (
      <footer className="bg-deepSlate py-10 animate-pulse">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
            <div className="col-span-4 md:col-span-12 lg:col-span-4">
              <div className="h-10 w-32 bg-gray-300 rounded mb-4" />
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 bg-gray-300 rounded-full" />
                <div className="h-8 w-8 bg-gray-300 rounded-full" />
                <div className="h-8 w-8 bg-gray-300 rounded-full" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="h-6 w-24 bg-gray-300 rounded mb-4" />
              <ul>
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="h-4 w-20 bg-gray-300 rounded mb-2" />
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <div className="h-6 w-24 bg-gray-300 rounded mb-4" />
              <ul>
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="h-4 w-20 bg-gray-300 rounded mb-2" />
                ))}
              </ul>
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <div className="h-5 w-48 bg-gray-300 rounded mb-4" />
              <div className="h-5 w-32 bg-gray-300 rounded mb-4" />
              <div className="h-5 w-32 bg-gray-300 rounded mb-4" />
            </div>
          </div>
          <div className="mt-10 lg:flex items-center justify-between">
            <div className="h-4 w-64 bg-gray-300 rounded mb-4" />
            <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
              <div className="h-4 w-24 bg-gray-300 rounded" />
              <div className="h-4 w-24 bg-gray-300 rounded" />
            </div>
            <div className="h-4 w-48 bg-gray-300 rounded mb-4" />
          </div>
        </div>
      </footer>
    );

  return (
    <footer className="bg-deepSlate py-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className="col-span-4 md:col-span-12 lg:col-span-4">
            <Logo />
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-primary text-black text-3xl">
                <Icon icon="tabler:brand-facebook" />
              </Link>
              <Link href="#" className="hover:text-primary text-black text-3xl">
                <Icon icon="tabler:brand-twitter" />
              </Link>
              <Link href="#" className="hover:text-primary text-black text-3xl">
                <Icon icon="tabler:brand-instagram" />
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Links</h3>
            <ul>
              {headerData.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 text-black/50 hover:text-primary w-fit"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Other</h3>
            <ul>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="#">About Us</Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="#">Our Team</Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="#">career</Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="#">Services</Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-4">
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:brand-google-maps"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">{footerData.address}</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:phone"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">{footerData.phone}</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:folder"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">{footerData.email}</h5>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:flex items-center justify-between">
          <h4 className="text-black/50 text-sm text-center lg:text-start font-normal">
            {footerData.copyright}
          </h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <Link
              href="/"
              className="text-black/50 text-sm font-normal hover:text-primary"
            >
              Privacy policy
            </Link>
            <Link
              href="/"
              className="text-black/50 text-sm font-normal hover:text-primary"
            >
              Terms & conditions
            </Link>
          </div>
          <h4 className="text-black/50 text-sm text-center lg:text-start font-normal">
            Distributed by{" "}
            <Link
              href="https://themewagon.com/"
              target="_blank"
              className="hover:text-primary"
            >
              {" "}
              ThemeWagon
            </Link>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default footer;
