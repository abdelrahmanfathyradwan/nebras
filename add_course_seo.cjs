const fs = require('fs');
const path = require('path');

const coursesDir = path.join(__dirname, 'src/courses');
const files = fs.readdirSync(coursesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(coursesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('<SEO')) return; // already added

  // Extract course title from h1
  const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  const courseTitle = titleMatch ? titleMatch[1].trim() : file.replace('.jsx', '');

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseTitle,
    "description": `Learn ${courseTitle} online with certified teachers from Al-Azhar.`,
    "provider": {
      "@type": "Organization",
      "name": "Nebras Academy",
      "sameAs": "https://nebrasacademy.com"
    }
  };

  const schemaString = JSON.stringify(courseSchema, null, 2);

  // Add imports
  content = content.replace(
    "import { Link } from 'react-router-dom';", 
    "import { Link } from 'react-router-dom';\nimport SEO from '../components/SEO';\nimport StructuredData from '../components/StructuredData';"
  );
  
  if (!content.includes('import SEO')) {
     content = "import SEO from '../components/SEO';\nimport StructuredData from '../components/StructuredData';\n" + content;
  }

  // Inject SEO and StructuredData right after the first <div className="mx-auto">
  const injection = `
      <SEO 
        title="${courseTitle} Course" 
        description="Enroll in the ${courseTitle} course at Nebras Academy. Learn online with certified Al-Azhar teachers." 
        canonical="/courses/${file.replace('.jsx', '')}"
      />
      <StructuredData data={${schemaString}} />`;

  content = content.replace(/<div className="mx-auto">/, `<div className="mx-auto">${injection}`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
