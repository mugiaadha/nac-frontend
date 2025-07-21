import { createContext } from "react";
import { SiteSettings } from "./footerReducer";

const SiteContext = createContext<SiteSettings | null>(null);
export default SiteContext;
