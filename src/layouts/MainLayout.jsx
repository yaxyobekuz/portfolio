import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Header from "../components/Header";

// Images
import backgroundImage from "../assets/images/backgrounds/body.jpg";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <>
      {/* --- Content --- */}
      <div className="h-screen relative z-1">
        {/* Header */}
        <Header />

        {/* Main */}
        <main className="flex h-[calc(100%-56px)]">
          {/* sidebar */}
          <Sidebar />

          {/* pages */}
          <div className="w-full h-full overflow-y-auto">
            <div className="container">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      {/* --- Background --- */}
      <img
        loading="lazy"
        src={backgroundImage}
        alt="site background"
        className="fixed inset-0 z-0 size-full select-none object-cover"
      />
    </>
  );
};

export default MainLayout;
