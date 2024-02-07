import Link from "next/link";
import React from "react";

export default function Footer2() {
  return (
    <section className="footer2">
      <div className="auto__container sm">
        <div className="footer2__inner">
          <div className="footer2__inner-links">
            <Link href="/">Home</Link>
            <Link href="/join">Join</Link>
          </div>
          <Link href="/" className="footer2__inner-logo">
            <img src="/images/logo.png" alt="" />
          </Link>
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}
