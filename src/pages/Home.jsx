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
        title="Online Quran Classes for Kids & Adults – Nebras Academy"
        description="Learn Quran online with live 1-on-1 Tajweed, memorization and Arabic lessons for kids and adults. Flexible schedules. Book your free trial today."
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
