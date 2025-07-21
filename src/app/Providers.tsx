"use client";
import { useEffect, useReducer, ReactNode } from "react";
import { getSiteData } from "@/services/apiService";
import {
  siteReducer,
  SiteSettings,
} from "@/components/Layout/Footer/siteReducer";
import SiteSettingsContext from "@/context/SiteSettingsContext";

const initialState: SiteSettings | null = null;

export default function Providers({ children }: { children: ReactNode }) {
  const [siteData, dispatch] = useReducer(siteReducer, initialState);

  useEffect(() => {
    getSiteData<SiteSettings>()
      .then((data) => dispatch({ type: "SET_DATA", payload: data }))
      .catch(() => dispatch({ type: "ERROR" }));
  }, []);

  return (
    <SiteSettingsContext.Provider value={siteData}>{children}</SiteSettingsContext.Provider>
  );
}
