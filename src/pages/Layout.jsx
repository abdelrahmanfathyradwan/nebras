import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";

function Layout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Nebras Academy",
    "url": "https://nebrasacademy.com",
    "logo": "https://nebrasacademy.com/images/quran2.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+20-100-334-2452",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    }
  };

  return (
    <>
      <StructuredData data={organizationSchema} />
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;