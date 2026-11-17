import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./components/Destinations";
import Services from "./components/Services";
import VisaProcess from "./components/VisaProcess";
import WhyTrust from "./components/WhyTrust";
import Faq from "./components/Faq";
import Reviews from "./components/Reviews";
import Contact from "./pages/Contact";
import ThankYou from "./components/ThankYou";
export default function App() {
  if (window.location.pathname.replace(/\/+$/, "") === "/contact") {
    return (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    );
   }
  if (window.location.pathname.replace(/\/+$/, "").endsWith("/thankyou")) {
    return (
      <>
        <Navbar />
        <ThankYou />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Home />
      <Destinations />
      <Services />
      <VisaProcess />
      <WhyTrust />
      <Faq />
      <Reviews />
      <Footer />
    </>
  );
}