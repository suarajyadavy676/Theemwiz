import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from './components/Header';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import PricingSection from './components/PricingSection';
import TeamSection from './components/TeamSection'; 
import HeroSection from "./components/HeroSection";
import AgencyLanding from "./components/AgencyLanding";
import LatestWorkSection from "./components/LatestWorkSection";
import PromoSection from "./components/PromoSection";
function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <AgencyLanding />
    <LatestWorkSection />
    <PromoSection />
      {/* <h1 className="text-3xl font-bold underline text-center">
        Welcome to React
      </h1>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card> */}
      <TeamSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
