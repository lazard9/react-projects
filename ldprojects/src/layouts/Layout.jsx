import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/partials/ScrollToTop";

export default function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollToTop />
    </>
  )
}
