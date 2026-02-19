import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';

const BASE_URL = 'https://austinevcharger.com';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getArticleBySlug(slug: string) {
  const articlesDir = path.join(process.cwd(), 'content', 'articles');
  const files = fs.readdirSync(articlesDir);
  
  // Find file that matches the slug
  const matchingFile = files.find(file => {
    const fileSlug = file.replace(/^\d+-/, '').replace(/\.md$/, '');
    return fileSlug === slug;
  });
  
  if (!matchingFile) {
    return null;
  }
  
  const filePath = path.join(articlesDir, matchingFile);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  
  // Extract title from first # heading if not in frontmatter
  const title = data.title || content.match(/^#\s+(.+)$/m)?.[1] || 'Untitled';
  
  // Estimate read time
  const wordCount = content.split(/\s+/).length;
  const readTime = `${Math.ceil(wordCount / 200)} min read`;
  
  return {
    slug,
    title,
    content,
    date: data.date || '2026-02-08',
    readTime,
    description: data.description || ''
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description || `${article.title} - Expert EV charger installation guide for Austin, TX homeowners.`,
    openGraph: {
      title: article.title,
      description: article.description || `${article.title} - Expert EV charger installation guide for Austin, TX homeowners.`,
      type: 'article',
      url: `${BASE_URL}/blog/${slug}`,
      publishedTime: article.date,
      siteName: 'AustinEVCharger',
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'content', 'articles');
  const files = fs.readdirSync(articlesDir);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace(/^\d+-/, '').replace(/\.md$/, '')
    }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            ← Back to Articles
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
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
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-gray max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-700">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900">{children}</strong>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-50">{children}</thead>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-300">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                  {children}
                </td>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Install Your EV Charger?
          </h3>
          <p className="text-gray-700 mb-4">
            Get a free quote from top-rated EV charger installers in Austin.
          </p>
          <Link 
            href="/get-quote"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </article>

      {/* Article JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.description || `${article.title} - Expert EV charger installation guide for Austin, TX homeowners.`,
            "author": {
              "@type": "Organization",
              "name": "AustinEVCharger",
              "url": BASE_URL
            },
            "publisher": {
              "@type": "Organization",
              "name": "AustinEVCharger",
              "url": BASE_URL
            },
            "datePublished": article.date,
            "dateModified": article.date,
            "url": `${BASE_URL}/blog/${article.slug}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${BASE_URL}/blog/${article.slug}`
            },
            "about": {
              "@type": "Thing",
              "name": "EV Charger Installation Austin TX"
            }
          })
        }}
      />
    </div>
  );
}
