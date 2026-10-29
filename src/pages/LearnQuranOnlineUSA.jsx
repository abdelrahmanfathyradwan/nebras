import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import USAPageHero from '../components/usa/USAPageHero';
import ContentSection from '../components/usa/ContentSection';
import TOC from '../components/usa/TOC';
import FAQList from '../components/usa/FAQList';
import CTASection from '../components/usa/CTASection';
import { guidePage, guideSectionsPart1 } from '../data/usa/guideContent';
import { guideSectionsPart2, guideFaqs } from '../data/usa/guideContentPart2';
import {
  PAGE_PATHS,
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
} from '../data/usa/shared';

const sections = [...guideSectionsPart1, ...guideSectionsPart2];

const LearnQuranOnlineUSA = () => (
  <div className="page-enter">
    <SEO
      title={guidePage.seo.title}
      description={guidePage.seo.description}
      canonical={guidePage.seo.canonical}
      ogImage={guidePage.seo.ogImage}
      ogType="article"
    />

    <StructuredData
      data={articleSchema({
        headline: guidePage.hero.title,
        description: guidePage.seo.description,
        pagePath: PAGE_PATHS.guide,
        image: guidePage.seo.ogImage,
      })}
    />
    <StructuredData data={breadcrumbSchema('Learn Quran Online in the USA', PAGE_PATHS.guide)} />
    <StructuredData data={faqPageSchema(guideFaqs, PAGE_PATHS.guide)} />

    <USAPageHero {...guidePage.hero} />

    <div className="container mx-auto grid gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
      <aside className="self-start lg:sticky lg:top-28">
        <TOC items={guidePage.toc} />
        <p className="mt-4 px-1 text-xs leading-5 text-gray-500">
          Updated 28 October 2026. This guide is educational content, not a religious ruling.
        </p>
      </aside>

      <div className="min-w-0 space-y-16">
        {sections.map((section) => (
          <ContentSection key={section.id} {...section} />
        ))}

        <ContentSection
          id="faq"
          kicker="Questions"
          title="Frequently asked questions about learning Quran online"
          intro="These questions come up repeatedly from US families and adult learners. If your situation is different, the trial is the best place to ask a teacher directly."
        >
          <div className="mt-6">
            <FAQList faqs={guideFaqs} />
          </div>
        </ContentSection>

        <p className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm leading-7 text-gray-700">
          <strong className="font-bold text-secondary-800">A note on sourcing.</strong> This guide
          describes the academy’s published programmes, rates and teacher credentials, and general
          educational practice. It does not invent student stories, reviews or timelines. Where a
          detail depends on the owner’s confirmation, the page says so instead of guessing.
        </p>
      </div>
    </div>

    <div id="next-step" className="scroll-mt-28">
      <CTASection
        title="Learn Quran online with a teacher who can hear you"
        text="Use the free trial to meet a teacher, assess your starting point and leave with a plan. No card is required."
        primaryLabel="Book your free trial"
      />
    </div>
  </div>
);

export default LearnQuranOnlineUSA;
