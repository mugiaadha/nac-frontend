import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteSettingsContext from "@/context/SiteSettingsContext";

const Logo: React.FC = () => {
  const siteSettings = useContext(SiteSettingsContext);
  return (
    <Link href="/">
      {siteSettings?.logo && (
        <Image
          src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${siteSettings.logo}`}
          alt="logo"
          width={160}
          height={50}
          style={{ width: "auto", height: "auto" }}
          quality={100}
        />
      )}
    </Link>
  );
};

export default Logo;
