"use client";
import { useEffect, useReducer, ReactNode } from "react";
import { getSiteData } from "@/services/apiService";
import {
  footerReducer,
  SiteSettings,
} from "@/components/Layout/Footer/footerReducer";
import FooterContext from "@/components/Layout/Footer/FooterContext";

const initialState: SiteSettings | null = null;

export default function Providers({ children }: { children: ReactNode }) {
  const [siteSettings, dispatch] = useReducer(footerReducer, initialState);

  useEffect(() => {
    getSiteData<SiteSettings>()
      .then((data) => dispatch({ type: "SET_DATA", payload: data }))
      .catch(() => dispatch({ type: "ERROR" }));
  }, []);

  return (
    <FooterContext.Provider value={siteSettings}>
      {children}
    </FooterContext.Provider>
  );
}
