import Head from "next/head";
import Header from "./Header";

const Layout = ({ title, children, description, keywords }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>

      <Header />

      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Welcome to DevSpace Blog',
  description: 'Find the best blogs and articles',
  keywords: 'blog, coding, programming, development'
}