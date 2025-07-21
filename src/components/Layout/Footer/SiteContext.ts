import { createContext } from "react";
import { SiteSettings } from "./siteReducer";

const SiteContext = createContext<SiteSettings | null>(null);
export default SiteContext;
