import React from "react";

const FooterSkeleton: React.FC = () => {
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
};

export default FooterSkeleton;
