import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { InlineText } from './InlineText';

const P = 'text-gray-700 text-base sm:text-[17px] leading-8';

const ProseBlocks = ({ blocks = [] }) => (
  <>
    {blocks.map((block, index) => {
      const key = block.id || `block-${index}`;

      switch (block.type) {
        case 'h3':
          return (
            <h3 key={key} className="text-xl sm:text-2xl font-bold text-secondary-800 mt-10 mb-3">
              <InlineText text={block.text} />
            </h3>
          );

        case 'h4':
          return (
            <h4 key={key} className="text-lg font-bold text-secondary-800 mt-6 mb-2">
              <InlineText text={block.text} />
            </h4>
          );

        case 'p':
          return (
            <p key={key} className={`${P} mb-5`}>
              <InlineText text={block.text} />
            </p>
          );

        case 'ul':
          return (
            <ul key={key} className={`${P} mb-6 list-disc pl-6 space-y-2 marker:text-primary-500`}>
              {block.items.map((item, i) => (
                <li key={i}>
                  <InlineText text={item} />
                </li>
              ))}
            </ul>
          );

        case 'ol':
          return (
            <ol key={key} className={`${P} mb-6 list-decimal pl-6 space-y-2 marker:text-primary-600 marker:font-semibold`}>
              {block.items.map((item, i) => (
                <li key={i}>
                  <InlineText text={item} />
                </li>
              ))}
            </ol>
          );

        case 'checklist':
          return (
            <ul key={key} className="mb-6 space-y-2.5">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-700 text-base leading-7">
                  <FaCheckCircle className="text-emerald-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <InlineText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          );

        case 'steps':
          return (
            <ol key={key} className="mb-8 space-y-4">
              {block.items.map((step, i) => (
                <li key={i} className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50/70 p-4 sm:p-5">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-secondary-800">{step.title}</h4>
                    <p className="mt-1 text-sm sm:text-base leading-7 text-gray-700">
                      <InlineText text={step.text} />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          );

        case 'table':
          return (
            <div key={key} className="mb-8">
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  {block.caption && (
                    <caption className="caption-bottom px-4 py-3 text-xs text-gray-500">{block.caption}</caption>
                  )}
                  <thead className="bg-secondary-600 text-white">
                    <tr>
                      {block.head.map((cell) => (
                        <th key={cell} scope="col" className="px-4 py-3 font-semibold">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {block.rows.map((row, r) => (
                      <tr key={r} className="align-top">
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th key={c} scope="row" className="px-4 py-3 font-semibold text-secondary-800">
                              <InlineText text={cell} />
                            </th>
                          ) : (
                            <td key={c} className="px-4 py-3 text-gray-700 leading-6">
                              <InlineText text={cell} />
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );

        case 'callout':
          return (
            <aside
              key={key}
              className="mb-8 rounded-2xl border-l-4 border-primary-500 bg-primary-50/60 p-5"
            >
              {block.title && <p className="mb-1 font-bold text-secondary-800">{block.title}</p>}
              <p className="text-sm sm:text-base leading-7 text-gray-700">
                <InlineText text={block.text} />
              </p>
            </aside>
          );

        case 'quote':
          return (
            <blockquote key={key} className="mb-8 rounded-2xl bg-gray-50 p-6 text-gray-700">
              <p className="text-base sm:text-lg italic leading-8">
                <InlineText text={block.text} />
              </p>
              {block.cite && <footer className="mt-3 text-sm font-semibold text-secondary-700">— {block.cite}</footer>}
            </blockquote>
          );

        case 'image':
          return (
            <figure key={key} className={`mb-9 ${block.maxWidth || ''}`}>
              <img
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border border-gray-200 bg-gray-50"
              />
              {block.caption && (
                <figcaption className="mt-2 text-xs leading-5 text-gray-500">{block.caption}</figcaption>
              )}
            </figure>
          );

        case 'gallery':
          return (
            <div key={key} className="mb-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {block.items.map((item) => (
                  <figure key={item.src} className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full"
                    />
                    {item.caption && (
                      <figcaption className="px-4 py-3 text-xs leading-5 text-gray-600">{item.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
              {block.caption && <p className="mt-3 text-xs leading-5 text-gray-500">{block.caption}</p>}
            </div>
          );

        case 'links':
          return (
            <div key={key} className="mb-8 grid gap-3 sm:grid-cols-2">
              {block.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-primary-400 hover:shadow-md"
                >
                  <span className="block font-bold text-secondary-800 group-hover:text-primary-700">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-gray-600">{item.description}</span>
                </Link>
              ))}
            </div>
          );

        default:
          return null;
      }
    })}
  </>
);

export default ProseBlocks;
