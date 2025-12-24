import { MetaProvider, Title } from "@solidjs/meta";
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import type {} from "solid-styled-jsx";
// import "./app.css";

export default function App() {
  return (
    <>
      <Router
        base={import.meta.env.SERVER_BASE_URL} // This pulls from app.config.ts
        root={(props) => (
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <A href="/">Index</A>
            <A href="about">About</A>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )}
      >
        <FileRoutes />
      </Router>
      <style jsx global>
        {`
          body {
            font-family:
              Gordita, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }

          a {
            margin-right: 1rem;
          }

          main {
            text-align: center;
            padding: 1em;
            margin: 0 auto;
          }

          h1 {
            color: #335d92;
            text-transform: uppercase;
            font-size: 4rem;
            font-weight: 100;
            line-height: 1.1;
            margin: 4rem auto;
            max-width: 14rem;
          }

          p {
            max-width: 14rem;
            margin: 2rem auto;
            line-height: 1.35;
          }

          @media (min-width: 480px) {
            h1 {
              max-width: none;
            }

            p {
              max-width: none;
            }
          }
          `}
      </style>
    </>
  );
}
