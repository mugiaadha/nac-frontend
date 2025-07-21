"use client";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { getImagePrefix } from "@/utils/util";
import SiteSettingsContext from "@/context/SiteSettingsContext";

interface LogoProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
  useSiteSettings?: boolean; // Use site settings logo from context
  fallbackText?: string;
}

const Logo: React.FC<LogoProps> = ({
  src = "/logo/logo.svg",
  alt = "Logo",
  width = 120,
  height = 40,
  className = "",
  priority = false,
  style,
  useSiteSettings = false,
  fallbackText = "Logo",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const siteSettings = useContext(SiteSettingsContext);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Determine the image source
  const imageSrc = useSiteSettings && siteSettings?.logo 
    ? `${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${siteSettings.logo}`
    : `${getImagePrefix()}${src}`;

  // Don't render anything if using site settings but no logo available
  if (useSiteSettings && !siteSettings?.logo && !hasError) {
    return null;
  }

  return (
    <div className={`relative ${className}`} style={{ width, height, ...style }}>
      {/* Skeleton Loader */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      
      {/* Logo Image */}
      {!hasError && (
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ width: "100%", height: "auto" }}
        />
      )}
      
      {/* Fallback for error */}
      {hasError && (
        <div 
          className="flex items-center justify-center bg-gray-100 text-gray-400 text-sm font-medium rounded"
          style={{ width, height }}
        >
          {fallbackText}
        </div>
      )}
    </div>
  );
};

export default Logo;
