import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

// App wrapper that uses StaticRouter instead of BrowserRouter for SSR
import Layout from './pages/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQPage';
import Courses from './pages/Courses';
import Tajweed from './courses/Tajweed';
import Recitation from './courses/Recitation';
import Reading from './courses/Reading';
import Memorization from './courses/Memorization';
import Arabic from './courses/Arabic';
import Policy from './pages/Policy';
import Blog from './pages/Blog';
import ApplyForJop from './pages/ApplyForJop';
import Pricing from './pages/Pricing';
import ArabicKids from './courses/ArabicKids';
import Islamic from './courses/Islamic';
import MemorizingJuzAmma from './courses/MemorizingJuzAmma';
import About from './pages/About';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function ServerApp({ url }) {
  return (
    <StaticRouter location={url}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/tajweed" element={<Tajweed />} />
          <Route path="/courses/reading" element={<Reading />} />
          <Route path="/courses/recitation" element={<Recitation />} />
          <Route path="/courses/memorization" element={<Memorization />} />
          <Route path="/courses/arabic" element={<Arabic />} />
          <Route path="/courses/MemorizingJuzAmma" element={<MemorizingJuzAmma />} />
          <Route path="/courses/ArabicKids" element={<ArabicKids />} />
          <Route path="/courses/Islamic" element={<Islamic />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/applyForJop" element={<ApplyForJop />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </StaticRouter>
  );
}

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <ServerApp url={url} />
    </HelmetProvider>
  );
  const { helmet } = helmetContext;
  return { html, helmet };
}
