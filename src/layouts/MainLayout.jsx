import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Components
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

// Translate
import { useTranslation } from "react-i18next";

// Images
import backgroundImage from "../assets/images/backgrounds/body.jpg";

const MainLayout = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const navlinks = t("header_navlinks", { returnObjects: true });

  useEffect(() => {
    setIsOpenSidebar(false);
    const firstPath = location.pathname.split("/").filter((i) => i !== "")[1];
    const getTitle = (href) => navlinks.find((nav) => nav.href === href)?.name;
    const title = `Yaxyobek Uz | ${getTitle(firstPath) || getTitle("/")}`;

    document.title = title;
  }, [location, i18n.language]);

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
