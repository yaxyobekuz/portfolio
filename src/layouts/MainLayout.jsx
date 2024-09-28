import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Components
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

// Images
import backgroundImage from "../assets/images/backgrounds/body.jpg";

const MainLayout = () => {
  const location = useLocation();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  useEffect(() => {
    setIsOpenSidebar(false);
  }, [location]);

  return (
    <>
      {/* --- Content --- */}
      <div className="h-screen relative z-1">
        {/* Header */}
        <Header
          isOpenSidebar={isOpenSidebar}
          toggleOpenSidebar={() => setIsOpenSidebar((state) => !state)}
        />

        {/* Main */}
        <main className="flex h-[calc(100%-112px)] lg:h-[calc(100%-56px)]">
          {/* sidebar */}
          <Sidebar
            isOpen={isOpenSidebar}
            onClose={() => setIsOpenSidebar(false)}
          />

          {/* pages */}
          <div className="w-full h-full overflow-y-auto scroll-primary sm:scroll-primary-large">
            <div className="container h-full">
              <Outlet />
            </div>
          </div>
        </main>

        <NavBar />
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
