"use client";
import { useEffect, useReducer, ReactNode } from "react";
import { getSiteData } from "@/services/apiService";
import SiteSettingsContext from "@/context/SiteSettingsContext";
import { SiteSettings, siteReducer } from "@/components/Layout/Footer/siteReducer";

const initialState: SiteSettings | null = null;

export default function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [siteSettings, dispatch] = useReducer(siteReducer, initialState);

  useEffect(() => {
    getSiteData<SiteSettings>()
      .then((data) => dispatch({ type: "SET_DATA", payload: data }))
      .catch(() => dispatch({ type: "ERROR" }));
  }, []);

  return (
    <SiteSettingsContext.Provider value={siteSettings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}
