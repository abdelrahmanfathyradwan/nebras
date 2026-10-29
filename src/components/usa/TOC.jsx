const TOC = ({ items, label = 'On this page' }) => (
  <nav
    aria-label={label}
    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
  >
    <p className="text-xs font-bold uppercase tracking-wider text-primary-600">{label}</p>
    <ol className="mt-3 space-y-2">
      {items.map((item, index) => (
        <li key={item.id} className="flex gap-2.5 text-sm leading-6">
          <span className="font-mono text-xs font-bold text-primary-500" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <a
            href={`#${item.id}`}
            className="font-medium text-secondary-800 underline-offset-4 transition-colors hover:text-primary-600 hover:underline"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

export default TOC;
