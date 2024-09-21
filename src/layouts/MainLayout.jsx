import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Header from "../components/Header";

// Images
import backgroundImage from "../assets/images/backgrounds/body.jpg";

const MainLayout = () => {
  return (
    <>
      {/* --- Content --- */}
      <div className="flex flex-col min-h-screen relative z-1">
        {/* Header */}
        <Header />

        {/* Main */}
        <main className="">
          <Outlet />
        </main>
      </div>

      {/* --- Background --- */}
      <img
        src={backgroundImage}
        alt="site background"
        className="fixed inset-0 z-0 size-full select-none object-cover"
      />
    </>
  );
};

export default MainLayout;
