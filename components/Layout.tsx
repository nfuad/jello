import React from "react";
import Head from "next/head";

// custom imports
import Header from "./Header";
import { UserProvider } from "../utils/user";

export default ({ user, loading = false, children, container = false }) => (
  <UserProvider value={{ user, loading }}>
    <Head>
      <title>Next.js with Auth0</title>
    </Head>

    <Header />

    <main>
      {container ? <div className="container">{children}</div> : children}
    </main>

    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      :root {
        --primary: #ffd803;
        --tertiary: #bae8e8;
        --white: #fff;
        --dark: #272343;
        --grey: rgba(31, 18, 53, 0.6);
        --button-text: var(--dark);
        --link-border-bottom-dark: 1.2px solid var(--dark);
        --link-border-bottom-hover: 1.2px solid var(--primary);
        --box-shadow: 0 5px 15px -10px var(--grey);
        --font-family: -apple-system, "Segoe UI";
      }
      ::selection {
        background: var(--primary);
        color: var(--dark);
      }
      body {
        overflow: hidden;
        margin: 0;
        padding: 0;
        color: var(--dark);
        font-family: var(--font-family);
      }
      .container {
        max-width: 70vw;
        margin: 1.2rem auto;
      }
      a {
        color: var(--dark);
        border-bottom: var(--link-border-bottom-dark);
        text-decoration: none;
        transition: color 0.25s, border-bottom 0.2s;
      }
      a:hover {
        color: var(--primary);
        border-bottom: var(--link-border-bottom-hover);
      }
    `}</style>
  </UserProvider>
);
