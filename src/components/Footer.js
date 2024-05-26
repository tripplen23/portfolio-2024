import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
          by&nbsp;
          <Link
            href="https://github.com/tripplen23"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            BinhNguyen
          </Link>
        </div>

        <Link
          href="https://www.linkedin.com/in/duc-binh-nguyen-3b4839168/"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
