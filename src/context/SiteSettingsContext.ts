import { createContext } from "react";
import { SiteSettings } from "@/components/Layout/Footer/siteReducer";

const SiteSettingsContext = createContext<SiteSettings | null>(null);
export default SiteSettingsContext;
