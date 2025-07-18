import React from "react";

interface SkeletonLoaderProps {
  type?: "card" | "list" | "avatar";
  count?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ type = "card", count = 1, className = "" }) => {
  const renderSkeleton = () => {
    switch (type) {
      case "list":
        return (
          <ul className={className}>
            {[...Array(count)].map((_, i) => (
              <li key={i} className="h-4 w-20 bg-gray-300 rounded mb-2 animate-pulse" />
            ))}
          </ul>
        );
      case "avatar":
        return (
          <div className={`flex gap-4 ${className}`}>
            {[...Array(count)].map((_, i) => (
              <div key={i} className="h-8 w-8 bg-gray-300 rounded-full animate-pulse" />
            ))}
          </div>
        );
      case "card":
      default:
        return (
          <div className={`bg-gray-300 rounded h-10 w-32 mb-4 animate-pulse ${className}`} />
        );
    }
  };

  return <>{renderSkeleton()}</>;
};

export default SkeletonLoader;
