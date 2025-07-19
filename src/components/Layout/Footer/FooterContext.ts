import { createContext } from "react";
import { FooterType } from "./footerReducer";

const FooterContext = createContext<FooterType | null>(null);
export default FooterContext;
