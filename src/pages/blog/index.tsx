import type { GetStaticProps } from "next";
import Head from "next/head";
import { getPostMetas, type PostMeta } from "@/lib/blog";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";

interface BlogIndexProps {
  posts: PostMeta[];
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  return { props: { posts: getPostMetas() } };
};

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <>
      <Head>
        <title>Binh Nguyen | Blog</title>
        <meta
          name="description"
          content="Thoughts on AI, DevOps, and building with code."
        />
      </Head>
      <main className="flex w-full flex-col items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words & Ideas"
            className="mb-16 !text-6xl lg:!text-8xl sm:!text-6xl xs:!text-4xl"
          />
          {posts.length === 0 ? (
            <p className="text-dark/60 dark:text-light/60">No posts yet.</p>
          ) : (
            <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-1">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="relative flex w-full flex-col items-center rounded-2xl border border-dark bg-light p-8 dark:bg-dark dark:border-light lg:p-6"
                >
                  {post.coverImage && (
                    <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-sm text-dark/60 dark:text-light/60 mb-3">
                    <span>{post.date}</span>
                    {post.readingTime && (
                      <>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                      </>
                    )}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-2xl font-bold hover:underline"
                  >
                    <h2>{post.title}</h2>
                  </Link>
                  <p className="mt-3 mb-5 text-dark/70 dark:text-light/70 text-center">
                    {post.description}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
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
                </article>
              ))}
            </div>
          )}
        </Layout>
      </main>
      <TransitionEffect />
    </>
  );
}