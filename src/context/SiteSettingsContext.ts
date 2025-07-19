import { createContext } from "react";

export type SiteSettingsType = {
  logo: string;
  address: string;
  phone: string;
  email: string;
  copyright: string;
  // tambahkan field lain sesuai kebutuhan
};

const SiteSettingsContext = createContext<SiteSettingsType | null>(null);
export default SiteSettingsContext;
