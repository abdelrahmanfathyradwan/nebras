import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";
import ChatWidget from "../components/chat/ChatWidget";

function Layout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Nebras Academy",
    "url": "https://www.nebrasacadmy.com",
    "logo": "https://www.nebrasacadmy.com/images/quran2.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+20-100-334-2452",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    }
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