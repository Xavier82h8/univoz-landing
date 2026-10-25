import Navbar from '../shared/layout/Navbar/Navbar';
import SocialRail from '../shared/layout/SocialRail/SocialRail';
import Footer from '../shared/layout/Footer/Footer';
import Hero from '../features/landing/sections/Hero/Hero';
import Features from '../features/landing/sections/Features/Features';
import HowItWorks from '../features/landing/sections/HowItWorks/HowItWorks';
import Newsletter from '../features/landing/sections/Newsletter/Newsletter';
import FAQPage from '../features/faq/FAQPage';
import LegalPage from '../features/legal/LegalPage';
import AccessibilityPage from '../features/accessibility/AccessibilityPage';
import CookieBanner from '../shared/layout/CookieBanner/CookieBanner';

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '');
  const isFaqPage = pathname === '/preguntas-frecuentes';
  const isLegalPage = pathname === '/privacidad-y-terminos';
  const isAccessibilityPage = pathname === '/accesibilidad';

  return (
    <>
      {isFaqPage ? (
        <FAQPage />
      ) : isLegalPage ? (
        <LegalPage />
      ) : isAccessibilityPage ? (
        <AccessibilityPage />
      ) : (
        <>
          <Navbar />
          <SocialRail />
          <main>
            <Hero />
            <Features />
            <HowItWorks />
            <Newsletter />
          </main>
          <Footer />
        </>
      )}
      <CookieBanner />
    </>
  );
}
