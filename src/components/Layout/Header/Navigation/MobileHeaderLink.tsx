import { useState, useContext } from "react";
import Image from "next/image";
import SiteSettingsContext from "@/context/SiteSettingsContext";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const siteSettings = useContext(SiteSettingsContext);
  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : undefined}
        className="flex items-center justify-between w-full py-2 text-muted focus:outline-none"
      >
        <div className="flex items-center gap-2">
          {/* Logo with Skeleton */}
          {siteSettings?.logo && (
            <div className="relative">
              {isLoading && (
                <div className="w-8 h-8 bg-gray-200 animate-pulse rounded" />
              )}
              {!hasError && (
                <Image
                  src={siteSettings.logo}
                  alt="logo"
                  width={32}
                  height={32}
                  style={{ 
                    width: "auto", 
                    height: "auto",
                    opacity: isLoading ? 0 : 1,
                    transition: "opacity 0.3s ease"
                  }}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              )}
              {hasError && !isLoading && (
                <div className="w-8 h-8 bg-gray-100 text-gray-600 text-xs flex items-center justify-center rounded">
                  L
                </div>
              )}
            </div>
          )}
          {item.label}
        </div>
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 text-gray-500 hover:bg-gray-200"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
