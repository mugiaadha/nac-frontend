import { createContext } from "react";
import { SiteSettings } from "./footerReducer";

const FooterContext = createContext<SiteSettings | null>(null);
export default FooterContext;
