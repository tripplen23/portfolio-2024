import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

import { getPostSlugs, getPostSource, type PostMeta } from "@/lib/blog";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { mdxComponents } from "@/components/MDXComponents";

interface PageProps {
  meta: PostMeta | null;
  source: MDXRemoteSerializeResult | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostSource(slug);

  if (!post) {
    return { props: { meta: null, source: null } };
  }

  const { content, ...meta } = post;
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "one-dark-pro",
            keepBackground: true,
            defaultLang: { block: "plaintext" },
          },
        ],
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
    },
  });

  return { props: { meta, source } };
};

export default function BlogPost({ meta, source }: PageProps) {
  if (!meta || !source) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] flex-col items-center justify-center">
          <h1 className="mb-4 text-4xl font-bold">Post not found</h1>
          <Link
            href="/blog"
            className="text-dark/70 hover:underline dark:text-light/70"
          >
            ← Back to blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} | Binh Nguyen`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <main className="flex w-full flex-col items-center dark:text-light">
        <Layout className="pt-16">
          {/* Header */}
          <div className="mx-auto mb-10 w-full max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4 text-sm text-dark/60 dark:text-light/60">
              <span>{meta.date}</span>
              {meta.readingTime && (
                <>
                  <span>·</span>
                  <span>{meta.readingTime}</span>
                </>
              )}
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              {meta.title}
            </h1>
            <p className="mb-8 text-xl italic leading-relaxed text-dark/70 dark:text-light/70 md:text-2xl">
              {meta.description}
            </p>
            {meta.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {meta.tags.map((tag) => (
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
          {meta.coverImage && (
            <div className="relative mx-auto mb-12 h-64 max-w-3xl overflow-hidden rounded-2xl px-4 md:h-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={meta.coverImage}
                alt={meta.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* MDX Content */}
          <article className="prose prose-lg mx-auto w-full max-w-3xl rounded-2xl border border-dashed border-primaryDark/40 bg-dark/5 px-8 py-8 dark:prose-invert dark:bg-light/5 md:px-12">
            <MDXRemote {...source} components={mdxComponents} />
          </article>

          {/* Back link */}
          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="text-lg text-dark/70 hover:underline dark:text-light/70"
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
