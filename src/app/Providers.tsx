"use client";
import { useEffect, useReducer, ReactNode } from "react";
import { getSiteData } from "@/services/apiService";
import {
  siteReducer,
  SiteSettings,
} from "@/components/Layout/Footer/footerReducer";
import SiteContext from "@/components/Layout/Footer/SiteContext";

const initialState: SiteSettings | null = null;

export default function Providers({ children }: { children: ReactNode }) {
  const [siteData, dispatch] = useReducer(siteReducer, initialState);

  useEffect(() => {
    getSiteData<SiteSettings>()
      .then((data) => dispatch({ type: "SET_DATA", payload: data }))
      .catch(() => dispatch({ type: "ERROR" }));
  }, []);

  return (
    <SiteContext.Provider value={siteData}>{children}</SiteContext.Provider>
  );
}
