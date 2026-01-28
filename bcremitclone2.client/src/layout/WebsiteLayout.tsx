import LandingHeader from 'components/header/LandingHeader';
import Footer from 'components/footer/Footer';
import { Outlet, useLocation } from "react-router";

function WebsiteLayout () {
  const location = useLocation();
  const showHeaderFooter = location.pathname === '/';

  return (
    <>
      {showHeaderFooter && <LandingHeader />}
      <Outlet />
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default WebsiteLayout;