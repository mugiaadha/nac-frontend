import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@/components/Layout/Footer";
import Home from "./app/page";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        {/* Tambahkan route lain sesuai kebutuhan */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
