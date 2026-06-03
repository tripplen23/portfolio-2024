import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { getBlogPost, getAllSlugs, type BlogPost } from "@/lib/useBlogIndex";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

interface PageProps {
  post: BlogPost | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getBlogPost(slug);
  return {
    props: { post: post ?? null },
  };
};

export default function BlogPost({ post }: PageProps) {
  if (!post) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-dark/70 hover:underline dark:text-light/70">
            ← Back to blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <main className="flex w-full flex-col items-center dark:text-light">
        <Layout className="pt-16">
          {/* Header */}
          <div className="mb-10 text-center w-full max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 text-sm text-dark/60 dark:text-light/60 mb-5">
              <span>{post.date}</span>
              {post.readingTime && (
                <>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-dark/70 dark:text-light/70 italic leading-relaxed mb-8">
              {post.description}
            </p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-dark/10 px-3 py-1 text-xs dark:bg-light/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative mb-12 h-64 md:h-96 w-full max-w-3xl overflow-hidden rounded-2xl">
              <img
                src={post.coverImage}
                alt={post.title}
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* MDX Content */}
          <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto w-full px-4">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="[&_pre]:overflow-x-auto [&_pre]:max-w-[100vw] [&_pre]:whitespace-pre [&_pre]:text-xs [&_pre]:leading-tight [&_pre_font]:font-mono"
            />
          </article>

          {/* Back link */}
          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="text-dark/70 hover:underline dark:text-light/70 text-lg"
            >
              ← Back to all posts
            </Link>
          </div>
        </Layout>
      </main>
      <TransitionEffect />
    </>
  );
}