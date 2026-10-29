import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

// Server-side app: uses StaticRouter instead of BrowserRouter.
// KEEP THIS ROUTE LIST IN SYNC WITH src/App.jsx (same paths, same params).
import Layout from './pages/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import Teachers from './pages/Teachers';
import Trial from './pages/Trial';
import OnlineQuranClassesUSA from './pages/OnlineQuranClassesUSA';
import LearnQuranOnlineUSA from './pages/LearnQuranOnlineUSA';
import NotFound from './pages/NotFound';

function ServerApp({ url }) {
  return (
    <StaticRouter location={url}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Blog: descriptive slug (must match :slug used in BlogDetails.jsx) */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />

          {/* Courses (all lowercase) */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/tajweed" element={<Tajweed />} />
          <Route path="/courses/reading" element={<Reading />} />
          <Route path="/courses/recitation" element={<Recitation />} />
          <Route path="/courses/memorization" element={<Memorization />} />
          <Route path="/courses/arabic" element={<Arabic />} />
          <Route path="/courses/memorizing-juz-amma" element={<MemorizingJuzAmma />} />
          <Route path="/courses/arabic-kids" element={<ArabicKids />} />
          <Route path="/courses/islamic-studies" element={<Islamic />} />

          {/* Browser fallbacks; the real 301s live in vercel.json */}
          <Route path="/courses/secondary" element={<Navigate to="/courses/islamic-studies" replace />} />
          <Route path="/free-trial" element={<Navigate to="/trial" replace />} />

          {/* USA landing pages */}
          <Route path="/online-quran-classes-usa" element={<OnlineQuranClassesUSA />} />
          <Route path="/learn-quran-online-usa" element={<LearnQuranOnlineUSA />} />

          {/* Support pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/applyForJop" element={<ApplyForJop />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/trial" element={<Trial />} />
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