import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
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

import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />

          {/* المقالات: الرابط الآن يعتمد على slug وصفي بدل الرقم */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />

          {/* مسارات الكورسات (كلها بحروف صغيرة) */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/tajweed" element={<Tajweed />} />
          <Route path="/courses/reading" element={<Reading />} />
          <Route path="/courses/recitation" element={<Recitation />} />
          <Route path="/courses/memorization" element={<Memorization />} />
          <Route path="/courses/arabic" element={<Arabic />} />
          <Route path="/courses/memorizing-juz-amma" element={<MemorizingJuzAmma />} />
          <Route path="/courses/arabic-kids" element={<ArabicKids />} />
          <Route path="/courses/islamic-studies" element={<Islamic />} />

          {/*
            احتياط داخل المتصفح فقط: التحويل الحقيقي 301 يتم في vercel.json.
            هذه المسارات تغطي حالة الفتح المحلي (localhost) أو أي فشل في التحويل.
          */}
          <Route path="/courses/memorizing-juz-amma" element={<Navigate to="/courses/memorizing-juz-amma" replace />} />
          <Route path="/courses/arabic-kids" element={<Navigate to="/courses/arabic-kids" replace />} />
          <Route path="/courses/islamic-studies" element={<Navigate to="/courses/islamic-studies" replace />} />
          <Route path="/courses/islamic-studies" element={<Navigate to="/courses/islamic-studies" replace />} />
          <Route path="/courses/secondary" element={<Navigate to="/courses/islamic-studies" replace />} />

          {/* مسارات الدعم */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/applyForJop" element={<ApplyForJop />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;