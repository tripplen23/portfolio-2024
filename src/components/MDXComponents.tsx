import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import HermesArchitecture from "@/components/blog/HermesArchitecture";

// Custom renderers for MDX elements. The bulk of the styling comes from the
// Tailwind Typography `prose` classes on the wrapping <article>; these just
// handle behaviour that prose can't (internal routing, external link safety)
// plus any custom components authors can drop into posts.
export const mdxComponents = {
  HermesArchitecture,
  a: ({ href = "", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
};
