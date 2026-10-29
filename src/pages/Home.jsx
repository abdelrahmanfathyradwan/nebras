import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import MainContent from '../components/MainContent';
import CoursesDirectory from '../components/CoursesDirectory';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nebras Academy",
    "url": "https://www.nebrasacadmy.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.nebrasacadmy.com/courses?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO
        title="Nebras Academy | Quran, Arabic & Islamic Studies Online"
        description="Nebras Academy teaches the Quran, Tajweed, Arabic and Islamic studies live online for kids and adults. Meet our teachers and book a free trial."
        canonical="/"
      />
      <StructuredData data={websiteSchema} />
      <HeroSection />
      <IntroSection />
      <MainContent />
      <CoursesDirectory />
    </>
  )
}

export default Home;
