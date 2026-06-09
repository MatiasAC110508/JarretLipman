import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { NEWS_ARTICLES } from "@/data/news";
import { notFound } from "next/navigation";

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = NEWS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Link
          href="/in-the-news"
          className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-800 font-medium mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />{" "}
          Back to News Hub
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-brand-400 font-medium">{article.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-950 leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="mb-16 aspect-video w-full rounded-3xl overflow-hidden shadow-xl border border-brand-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg prose-brand prose-p:text-brand-800/80 prose-headings:font-display prose-headings:text-brand-950 max-w-none mb-16">
          {article.content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-xl font-light leading-relaxed text-brand-900 border-l-4 border-accent-400 pl-6 mb-8"
                  : ""
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="bg-brand-50 rounded-3xl p-10 md:p-14 border border-brand-100 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white shadow-sm border border-brand-100 rounded-2xl flex items-center justify-center text-brand-600 mb-6 font-display font-bold text-xl">
            JL
          </div>
          <h3 className="text-2xl font-display font-semibold text-brand-950 mb-4">
            View Source Material
          </h3>
          <p className="text-brand-800/80 mb-8 max-w-lg leading-relaxed">
            Connect with the original publication or media outlet to read the
            complete coverage and view associated multimedia.
          </p>
          <a
            href={article.externalLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 hover:bg-brand-950 text-white rounded-xl font-medium transition-colors shadow-lg"
          >
            {article.externalLinkText} <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
