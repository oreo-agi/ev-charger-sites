import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

function getArticles(): ArticleMeta[] {
  const articlesDir = path.join(process.cwd(), 'content', 'articles');
  const files = fs.readdirSync(articlesDir);
  
  const articles = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(articlesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      // Extract title from first # heading if not in frontmatter
      const title = data.title || content.match(/^#\s+(.+)$/m)?.[1] || 'Untitled';
      
      // Generate slug from filename
      const slug = file.replace(/^\d+-/, '').replace(/\.md$/, '');
      
      // Estimate read time
      const wordCount = content.split(/\s+/).length;
      const readTime = `${Math.ceil(wordCount / 200)} min read`;
      
      return {
        slug,
        title,
        description: data.description || content.substring(0, 160).replace(/[#*]/g, '').trim() + '...',
        date: data.date || '2026-02-08',
        readTime
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return articles;
}

export default function BlogPage() {
  const articles = getArticles();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">EV Charger Resources</h1>
          <p className="text-lg text-gray-600 mt-2">
            Expert guides on EV charger installation, costs, and incentives in Austin, TX
          </p>
        </div>
      </header>

      {/* Articles Grid */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.slug} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <Link href={`/blog/${article.slug}`}>
                <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
              </Link>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {article.description}
              </p>
              <Link 
                href={`/blog/${article.slug}`}
                className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-700"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
