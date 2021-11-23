import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
export default function AboutPage() {
  return (
    <Layout title="about page">
      <Link href="/">Home Page</Link>
      <h1>About Page</h1>
      <p>App for show casing food shows.</p>
    </Layout>
  );
}
