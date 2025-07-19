"use client";
import { useEffect, useReducer, ReactNode } from "react";
import { getFooterData } from "@/services/apiService";
import {
  footerReducer,
  FooterType,
} from "@/components/Layout/Footer/footerReducer";
import FooterContext from "@/components/Layout/Footer/FooterContext";

const initialState: FooterType | null = null;

export default function Providers({ children }: { children: ReactNode }) {
  const [footerData, dispatch] = useReducer(footerReducer, initialState);

  useEffect(() => {
    getFooterData<FooterType>()
      .then((data) => dispatch({ type: "SET_DATA", payload: data }))
      .catch(() => dispatch({ type: "ERROR" }));
  }, []);

  return (
    <FooterContext.Provider value={footerData}>
      {children}
    </FooterContext.Provider>
  );
}
