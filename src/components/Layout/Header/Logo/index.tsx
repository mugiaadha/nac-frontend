import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteSettingsContext from "@/context/SiteSettingsContext";

const Logo: React.FC = () => {
  const siteSettings = useContext(SiteSettingsContext);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <Link href="/" className="relative">
      {/* Skeleton Loader */}
      {isLoading && siteSettings?.logo && (
        <div className="w-40 h-12 bg-gray-200 animate-pulse rounded" />
      )}

      {siteSettings?.logo && !hasError && (
        <Image
          src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${siteSettings.logo}`}
          alt="logo"
          width={160}
          height={50}
          priority={true}
          style={{
            width: "auto",
            height: "auto",
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
          quality={100}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}

      {/* Fallback for error or no logo */}
      {(hasError || !siteSettings?.logo) && !isLoading && (
        <div className="w-40 h-12 flex items-center justify-center bg-gray-100 text-gray-600 font-medium rounded">
          Logo
        </div>
      )}
    </Link>
  );
};

export default Logo;
