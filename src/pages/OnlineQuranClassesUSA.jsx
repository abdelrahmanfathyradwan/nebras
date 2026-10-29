import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import USAPageHero from '../components/usa/USAPageHero';
import ContentSection from '../components/usa/ContentSection';
import TeacherSpotlight from '../components/usa/TeacherSpotlight';
import FAQList from '../components/usa/FAQList';
import CTASection from '../components/usa/CTASection';
import YouTubeFacade from '../components/usa/YouTubeFacade';
import { classPage } from '../data/usa/classContent';
import {
  PAGE_PATHS,
  OWNER_TODO,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  teachersPersonSchema,
  videoObjectSchema,
} from '../data/usa/shared';
import { teachers } from '../data/teachers';

const OnlineQuranClassesUSA = () => {
  const videos = OWNER_TODO.videos;

  const schemas = [
    breadcrumbSchema('Online Quran Classes in the USA', PAGE_PATHS.classes),
    faqPageSchema(classPage.faqs, PAGE_PATHS.classes),
    serviceSchema({
      name: 'Online Quran Classes in the USA',
      description: classPage.seo.description,
      pagePath: PAGE_PATHS.classes,
    }),
    ...teachersPersonSchema(teachers),
    ...videoObjectSchema(videos, PAGE_PATHS.classes),
  ];

  return (
    <div className="page-enter">
      <SEO
        title={classPage.seo.title}
        description={classPage.seo.description}
        canonical={classPage.seo.canonical}
        ogImage={classPage.seo.ogImage}
      />
      {schemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}

      <USAPageHero {...classPage.hero} />

      <section className="border-y border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <h2 className="sr-only">Online Quran classes at a glance</h2>
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {classPage.glance.map((item) => (
              <div key={item.label} className="border-l-2 border-primary-300 pl-3">
                <dt className="text-xs font-bold uppercase tracking-wider text-primary-600">{item.label}</dt>
                <dd className="mt-1 text-sm font-medium leading-6 text-secondary-800">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="container mx-auto space-y-16 px-4 py-14 md:px-6 md:py-20">
        {classPage.sections.map((section) => (
          <ContentSection key={section.id} {...section}>
            {section.id === 'teachers' && (
              <div className="mt-8">
                <TeacherSpotlight />
              </div>
            )}

            {section.id === 'see-a-class' && videos.length > 0 && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {videos.map((video) => (
                  <YouTubeFacade
                    key={video.youtubeId}
                    id={`video-${video.youtubeId}`}
                    youtubeId={video.youtubeId}
                    title={video.title}
                    summary={video.summary}
                  />
                ))}
              </div>
            )}
          </ContentSection>
        ))}

        <ContentSection
          id="faq"
          kicker="Questions"
          title="Frequently asked questions about online Quran classes"
          intro="These are the questions US families ask most often before booking a trial. If your question is not here, message the academy on WhatsApp or use the trial form."
        >
          <div className="mt-6">
            <FAQList faqs={classPage.faqs} />
          </div>
        </ContentSection>
      </div>

      <CTASection
        title="Book your free online Quran class"
        text="Meet a teacher, see how the live classroom works, and leave with a clear starting plan. No card is needed for the trial."
      />
    </div>
  );
};

export default OnlineQuranClassesUSA;
