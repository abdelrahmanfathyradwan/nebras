import { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * Tiny, injection-safe inline link renderer.
 * Syntax: [[visible label|/internal-path]] or [[visible label|https://example.com]]
 * Anything that is not a relative path or an http(s) URL is rendered as plain text.
 */
const INLINE_LINK = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;
const DEFAULT_LINK = 'text-primary-700 font-semibold underline underline-offset-2 hover:text-primary-600';

function renderLink(label, href, key, className) {
  if (href.startsWith('/')) {
    return (
      <Link key={key} to={href} className={className}>
        {label}
      </Link>
    );
  }
  if (/^https?:\/\//i.test(href)) {
    return (
      <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }
  return <Fragment key={key}>{label}</Fragment>;
}

export function InlineText({ text, linkClassName = DEFAULT_LINK }) {
  if (!text) return null;

  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  INLINE_LINK.lastIndex = 0;

  while ((match = INLINE_LINK.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(renderLink(match[1], match[2], `link-${key++}`, linkClassName));
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

export default InlineText;
