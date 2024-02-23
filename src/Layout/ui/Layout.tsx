import { FC } from "react";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

const Layout: FC = () => {
  return (
    <div className="w-full">
      <Header />
      <main id="main" className="flex flex-col justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
