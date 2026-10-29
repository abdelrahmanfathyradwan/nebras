import ProseBlocks from './ProseBlocks';

const ContentSection = ({ id, kicker, title, intro, blocks = [], children, className = '' }) => (
  <section id={id} className={`scroll-mt-28 ${className}`}>
    {kicker && (
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary-600">{kicker}</p>
    )}
    <h2 className="text-2xl font-bold leading-tight text-secondary-800 sm:text-3xl">{title}</h2>
    <div className="mt-3 h-1 w-16 rounded-full bg-primary-500" aria-hidden="true" />
    {intro && <p className="mt-5 text-base leading-8 text-gray-700 sm:text-lg">{intro}</p>}
    {blocks.length > 0 && (
      <div className="mt-6">
        <ProseBlocks blocks={blocks} />
      </div>
    )}
    {children}
  </section>
);

export default ContentSection;
