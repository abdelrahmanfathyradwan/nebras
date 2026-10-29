import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";
import ChatWidget from "../components/chat/ChatWidget";
import { ACADEMY, SITE_URL } from "../data/usa/shared";

function Layout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    "name": ACADEMY.name,
    "legalName": ACADEMY.legalName,
    "url": `${SITE_URL}/`,
    "logo": {
      "@type": "ImageObject",
      "url": ACADEMY.logo,
      "width": 1080,
      "height": 1080
    },
    "email": ACADEMY.email,
    "telephone": ACADEMY.telephoneE164,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cairo",
      "addressCountry": "EG"
    },
    "areaServed": "Worldwide",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": ACADEMY.telephoneE164,
      "email": ACADEMY.email,
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      ACADEMY.youtube,
      ACADEMY.telegram,
      ACADEMY.whatsappChannel,
      ACADEMY.facebook
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData data={organizationSchema} />
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      <ChatWidget />
    </div>
  );
}

export default Layout;
