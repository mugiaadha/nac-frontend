"use client";
import { useEffect, useReducer, ReactNode } from "react";
import { getSiteData } from "@/services/apiService";
import SiteSettingsContext, { SiteSettingsType } from "@/context/SiteSettingsContext";

function siteSettingsReducer(state: SiteSettingsType | null, action: { type: 'SET_DATA'; payload: SiteSettingsType } | { type: 'ERROR' }): SiteSettingsType | null {
  switch (action.type) {
    case 'SET_DATA':
      return { ...action.payload };
    case 'ERROR':
      return null;
    default:
      return state;
  }
}

const initialState: SiteSettingsType | null = null;

export default function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [siteSettings, dispatch] = useReducer(siteSettingsReducer, initialState);

  useEffect(() => {
    getSiteData<{ data: SiteSettingsType }>()
      .then((res) => dispatch({ type: "SET_DATA", payload: res.data }))
      .catch(() => dispatch({ type: "ERROR" }));
  }, []);

  return (
    <SiteSettingsContext.Provider value={siteSettings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}
